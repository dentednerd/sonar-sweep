const { sonarSweep, sonarSweepPlus } = require('../index');

const testData = [
  199, 200, 208, 210, 200, 207, 240, 269, 260, 263
];

describe('#sonarSweep', () => {
  test('counts the number of times a depth measurement increases', () => {
    expect(sonarSweep(testData)).toBe(7);
  });
});

describe('#sonarSweepPlus', () => {
  test('counts the number of times a measurement window increases', () => {
    expect(sonarSweepPlus(testData)).toBe(5);
  });
});
