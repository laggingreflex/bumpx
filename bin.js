#!/usr/bin/env node

const main = require('.');

const config = { range: null, dry: false, silent: false };
for (const argv of process.argv.slice(2)) {
  if (argv.startsWith('-')) {
    config.dry = Boolean(argv.match(/^(?:-[a-z]*d[a-z]*|--dry)$/));
    config.silent = Boolean(argv.match(/^(?:-[a-z]*s[a-z]*|--silent)$/));
  } else {
    config.range = argv;
  }
}

const { operations } = main(config);
operations.run(config);
