const fs = require('fs');
const cp = require('child_process');

module.exports = main;

function main(config = {}) {
  const op = new Operations;
  const ranges = ['major', 'minor', 'patch'];
  const readJson = path => JSON.parse(fs.readFileSync(path, 'utf8'));
  const tag = () => {
    op.add('exec', `git tag --delete v${version}`);
    op.add('exec', `git tag v${version}`);
  };
  const update = () => {
    op.add('modifyJson', 'package.json', { version: String(version) });
    op.add('exec', `git add package.json`);
    op.add('exec', `git commit --message ${version}`);
  };
  let version, packageJson, finalVersion;
  const modify = {
    major() {
      version.major++;
      version.minor = version.patch = 0;
      finalVersion = new Version(version);
      update();
      tag();
      version.minor = version.patch = 'x';
      tag();
    },
    minor() {
      version.minor++;
      version.patch = 0;
      finalVersion = new Version(version);
      update();
      tag();
      version.patch = 'x';
      tag();
      version.minor = 'x';
      tag();
    },
    patch() {
      version.patch++;
      finalVersion = new Version(version);
      update();
      tag();
      version.patch = 'x';
      tag();
      version.minor = 'x';
      tag();
    },
  }

  if (typeof config === 'string') config = { range: config };

  if (!config.range) {
    throw new Error('Need a range: major|minor|patch');
  }
  if (!ranges.includes(config.range)) {
    throw new Error(`Range needs to be one of ${ranges.join('|')}`);
  }

  [{ version, packageJson }] = [config];
  if (!packageJson) packageJson = 'package.json';
  if (!version) {
    const pkg = readJson(packageJson || 'package.json');
    version = pkg.version;
  }
  if (!version) {
    throw new Error(`Invalid packageJson or version`);
  }
  version = new Version(version);

  modify[config.range]();

  return { version: String(finalVersion), operations: op };
}

class Version {
  constructor(version = {}) {
    let major, minor, patch;
    if (typeof version === 'string') {
      [major, minor, patch] = version.split('.').map(Number);
    } else {
      [{ major, minor, patch }] = [version];
    }
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  [Symbol.toPrimitive]() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }
}

class Operations extends Array {
  add(...args) {
    super.push(args)
  }
  run({ dry = false, silent = false } = {}) {
    this.dry = dry;
    this.silent = silent;
    for (const [command, ...args] of this) {
      if (!this[command]) throw new Error(`Invalid command: ${command}`);
      this[command](...args);
    }
  }
  exec(command) {
    this.log(command);
    if (this.dry) return;
    let args;
    [command, ...args] = command.split(' ');
    cp.spawnSync(command, args, { shell: true, stdio: 'inherit' });
  }
  modifyJson(file, data) {
    this.log(`Modifying '${file}' with`, data);
    if (this.dry) return;
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    fs.writeFileSync(file, JSON.stringify(Object.assign(json, data), null, 2) + '\n');
  }
  log(...msg) {
    if (!this.silent) console.log(...[this.dry && '(skipped)', ...msg].filter(Boolean));
  }
}
