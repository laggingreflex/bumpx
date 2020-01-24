exports['test 0.0.0 patch 1'] = {
  "config": { "version": "0.0.0", "range": "patch" },
  "result": {
    "version": "0.0.1",
    "operations": [
      ["modifyJson", "package.json", { "version": "0.0.1" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 0.0.1"],
      ["exec", "git tag --delete v0.0.1"],
      ["exec", "git tag v0.0.1"],
      ["exec", "git tag --delete v0.0.x"],
      ["exec", "git tag v0.0.x"]
    ]
  }
}

exports['test 0.0.0 minor 1'] = {
  "config": { "version": "0.0.0", "range": "minor" },
  "result": {
    "version": "0.1.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "0.1.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 0.1.0"],
      ["exec", "git tag --delete v0.1.0"],
      ["exec", "git tag v0.1.0"],
      ["exec", "git tag --delete v0.1.x"],
      ["exec", "git tag v0.1.x"],
      ["exec", "git tag --delete v0.x.x"],
      ["exec", "git tag v0.x.x"]
    ]
  }
}

exports['test 0.0.0 major 1'] = {
  "config": { "version": "0.0.0", "range": "major" },
  "result": {
    "version": "1.0.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.0.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.0.0"],
      ["exec", "git tag --delete v1.0.0"],
      ["exec", "git tag v1.0.0"],
      ["exec", "git tag --delete v1.x.x"],
      ["exec", "git tag v1.x.x"]
    ]
  }
}

exports['test 0.0.1 patch 1'] = {
  "config": { "version": "0.0.1", "range": "patch" },
  "result": {
    "version": "0.0.2",
    "operations": [
      ["modifyJson", "package.json", { "version": "0.0.2" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 0.0.2"],
      ["exec", "git tag --delete v0.0.2"],
      ["exec", "git tag v0.0.2"],
      ["exec", "git tag --delete v0.0.x"],
      ["exec", "git tag v0.0.x"]
    ]
  }
}

exports['test 0.0.1 minor 1'] = {
  "config": { "version": "0.0.1", "range": "minor" },
  "result": {
    "version": "0.1.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "0.1.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 0.1.0"],
      ["exec", "git tag --delete v0.1.0"],
      ["exec", "git tag v0.1.0"],
      ["exec", "git tag --delete v0.1.x"],
      ["exec", "git tag v0.1.x"],
      ["exec", "git tag --delete v0.x.x"],
      ["exec", "git tag v0.x.x"]
    ]
  }
}

exports['test 0.0.1 major 1'] = {
  "config": { "version": "0.0.1", "range": "major" },
  "result": {
    "version": "1.0.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.0.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.0.0"],
      ["exec", "git tag --delete v1.0.0"],
      ["exec", "git tag v1.0.0"],
      ["exec", "git tag --delete v1.x.x"],
      ["exec", "git tag v1.x.x"]
    ]
  }
}

exports['test 0.1.0 patch 1'] = {
  "config": { "version": "0.1.0", "range": "patch" },
  "result": {
    "version": "0.1.1",
    "operations": [
      ["modifyJson", "package.json", { "version": "0.1.1" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 0.1.1"],
      ["exec", "git tag --delete v0.1.1"],
      ["exec", "git tag v0.1.1"],
      ["exec", "git tag --delete v0.1.x"],
      ["exec", "git tag v0.1.x"]
    ]
  }
}

exports['test 0.1.0 minor 1'] = {
  "config": { "version": "0.1.0", "range": "minor" },
  "result": {
    "version": "0.2.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "0.2.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 0.2.0"],
      ["exec", "git tag --delete v0.2.0"],
      ["exec", "git tag v0.2.0"],
      ["exec", "git tag --delete v0.2.x"],
      ["exec", "git tag v0.2.x"],
      ["exec", "git tag --delete v0.x.x"],
      ["exec", "git tag v0.x.x"]
    ]
  }
}

exports['test 0.1.0 major 1'] = {
  "config": { "version": "0.1.0", "range": "major" },
  "result": {
    "version": "1.0.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.0.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.0.0"],
      ["exec", "git tag --delete v1.0.0"],
      ["exec", "git tag v1.0.0"],
      ["exec", "git tag --delete v1.x.x"],
      ["exec", "git tag v1.x.x"]
    ]
  }
}

exports['test 1.0.0 patch 1'] = {
  "config": { "version": "1.0.0", "range": "patch" },
  "result": {
    "version": "1.0.1",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.0.1" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.0.1"],
      ["exec", "git tag --delete v1.0.1"],
      ["exec", "git tag v1.0.1"],
      ["exec", "git tag --delete v1.0.x"],
      ["exec", "git tag v1.0.x"]
    ]
  }
}

exports['test 1.0.0 minor 1'] = {
  "config": { "version": "1.0.0", "range": "minor" },
  "result": {
    "version": "1.1.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.1.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.1.0"],
      ["exec", "git tag --delete v1.1.0"],
      ["exec", "git tag v1.1.0"],
      ["exec", "git tag --delete v1.1.x"],
      ["exec", "git tag v1.1.x"],
      ["exec", "git tag --delete v1.x.x"],
      ["exec", "git tag v1.x.x"]
    ]
  }
}

exports['test 1.0.0 major 1'] = {
  "config": { "version": "1.0.0", "range": "major" },
  "result": {
    "version": "2.0.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "2.0.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 2.0.0"],
      ["exec", "git tag --delete v2.0.0"],
      ["exec", "git tag v2.0.0"],
      ["exec", "git tag --delete v2.x.x"],
      ["exec", "git tag v2.x.x"]
    ]
  }
}

exports['test 1.0.1 patch 1'] = {
  "config": { "version": "1.0.1", "range": "patch" },
  "result": {
    "version": "1.0.2",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.0.2" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.0.2"],
      ["exec", "git tag --delete v1.0.2"],
      ["exec", "git tag v1.0.2"],
      ["exec", "git tag --delete v1.0.x"],
      ["exec", "git tag v1.0.x"]
    ]
  }
}

exports['test 1.0.1 minor 1'] = {
  "config": { "version": "1.0.1", "range": "minor" },
  "result": {
    "version": "1.1.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.1.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.1.0"],
      ["exec", "git tag --delete v1.1.0"],
      ["exec", "git tag v1.1.0"],
      ["exec", "git tag --delete v1.1.x"],
      ["exec", "git tag v1.1.x"],
      ["exec", "git tag --delete v1.x.x"],
      ["exec", "git tag v1.x.x"]
    ]
  }
}

exports['test 1.0.1 major 1'] = {
  "config": { "version": "1.0.1", "range": "major" },
  "result": {
    "version": "2.0.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "2.0.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 2.0.0"],
      ["exec", "git tag --delete v2.0.0"],
      ["exec", "git tag v2.0.0"],
      ["exec", "git tag --delete v2.x.x"],
      ["exec", "git tag v2.x.x"]
    ]
  }
}

exports['test 1.1.0 patch 1'] = {
  "config": { "version": "1.1.0", "range": "patch" },
  "result": {
    "version": "1.1.1",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.1.1" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.1.1"],
      ["exec", "git tag --delete v1.1.1"],
      ["exec", "git tag v1.1.1"],
      ["exec", "git tag --delete v1.1.x"],
      ["exec", "git tag v1.1.x"]
    ]
  }
}

exports['test 1.1.0 minor 1'] = {
  "config": { "version": "1.1.0", "range": "minor" },
  "result": {
    "version": "1.2.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.2.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.2.0"],
      ["exec", "git tag --delete v1.2.0"],
      ["exec", "git tag v1.2.0"],
      ["exec", "git tag --delete v1.2.x"],
      ["exec", "git tag v1.2.x"],
      ["exec", "git tag --delete v1.x.x"],
      ["exec", "git tag v1.x.x"]
    ]
  }
}

exports['test 1.1.0 major 1'] = {
  "config": { "version": "1.1.0", "range": "major" },
  "result": {
    "version": "2.0.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "2.0.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 2.0.0"],
      ["exec", "git tag --delete v2.0.0"],
      ["exec", "git tag v2.0.0"],
      ["exec", "git tag --delete v2.x.x"],
      ["exec", "git tag v2.x.x"]
    ]
  }
}

exports['test 1.1.1 patch 1'] = {
  "config": { "version": "1.1.1", "range": "patch" },
  "result": {
    "version": "1.1.2",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.1.2" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.1.2"],
      ["exec", "git tag --delete v1.1.2"],
      ["exec", "git tag v1.1.2"],
      ["exec", "git tag --delete v1.1.x"],
      ["exec", "git tag v1.1.x"]
    ]
  }
}

exports['test 1.1.1 minor 1'] = {
  "config": { "version": "1.1.1", "range": "minor" },
  "result": {
    "version": "1.2.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "1.2.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 1.2.0"],
      ["exec", "git tag --delete v1.2.0"],
      ["exec", "git tag v1.2.0"],
      ["exec", "git tag --delete v1.2.x"],
      ["exec", "git tag v1.2.x"],
      ["exec", "git tag --delete v1.x.x"],
      ["exec", "git tag v1.x.x"]
    ]
  }
}

exports['test 1.1.1 major 1'] = {
  "config": { "version": "1.1.1", "range": "major" },
  "result": {
    "version": "2.0.0",
    "operations": [
      ["modifyJson", "package.json", { "version": "2.0.0" }],
      ["exec", "git add package.json"],
      ["exec", "git commit --message 2.0.0"],
      ["exec", "git tag --delete v2.0.0"],
      ["exec", "git tag v2.0.0"],
      ["exec", "git tag --delete v2.x.x"],
      ["exec", "git tag v2.x.x"]
    ]
  }
}
