const sonarSweep = data => data.filter((n, i) => n > data[i - 1]).length;

const sonarSweepPlus = (data) => {
  const windows = data.reduce((acc, n, i) => {
    acc.push(data.slice(i, i+3).reduce((a,b) => a + b));
    return acc;
  }, []);

  return sonarSweep(windows);
}

module.exports = { sonarSweep, sonarSweepPlus };
