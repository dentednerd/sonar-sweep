const { sonarSweep } = require('../index');

const testData = [
  199, 200, 208, 210, 200, 207, 240, 269, 260, 263
];

describe('#sonarSweep', () => {
  test('counts the number of times a depth measurement increases', () => {
    expect(sonarSweep(testData)).toBe(7);
  });
});
