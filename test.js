const snapshot = require('snap-shot-it');
const main = require('.');

describe('test', () => {
  test('0.0.0', 'patch');
  test('0.0.0', 'minor');
  test('0.0.0', 'major');
  test('0.0.1', 'patch');
  test('0.0.1', 'minor');
  test('0.0.1', 'major');
  test('0.1.0', 'patch');
  test('0.1.0', 'minor');
  test('0.1.0', 'major');
  test('1.0.0', 'patch');
  test('1.0.0', 'minor');
  test('1.0.0', 'major');
  test('1.0.1', 'patch');
  test('1.0.1', 'minor');
  test('1.0.1', 'major');
  test('1.1.0', 'patch');
  test('1.1.0', 'minor');
  test('1.1.0', 'major');
  test('1.1.1', 'patch');
  test('1.1.1', 'minor');
  test('1.1.1', 'major');
});

function test(version, range, opts) {
  it(`${version} ${range}`, () => {
    const config = { version, range, ...opts };
    const result = main(config);
    snapshot({ config, result });
  });
}
