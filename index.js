const sonarSweep = data => data.filter((n, i) =>  n > data[i - 1]).length;

module.exports = { sonarSweep };
