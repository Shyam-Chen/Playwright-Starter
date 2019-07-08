import Table from 'cli-table';
import { format } from 'date-fns';

const primaryTable = new Table({
  head: ['object', 'average', 'mean', 'stddev', 'min', 'max', 'total', 'sent'],
  colWidths: Array(8).fill(12),
  style: { head: ['cyan'] },
});

const percentileTable = new Table({
  head: ['percentile', 'requests', 'latency', 'throughput'],
  colWidths: Array(4).fill(12),
  style: { head: ['cyan'] },
});

const extrasTable = new Table({
  head: ['errors', 'timeouts', 'duration', 'connections', 'pipelining'],
  colWidths: Array(5).fill(13),
  style: { head: ['cyan'] },
});

const non2xxTable = new Table({
  head: ['non2xx', '1xx', '2xx', '3xx', '4xx', '5xx'],
  colWidths: Array(6).fill(8),
  style: { head: ['cyan'] },
});

export const report = (err, res) => {
  if (err) throw err;

  primaryTable.splice(0, primaryTable.length);
  percentileTable.splice(0, percentileTable.length);
  extrasTable.splice(0, extrasTable.length);
  non2xxTable.splice(0, non2xxTable.length);

  primaryTable.push(
    [
      'requests',
      res.requests.average,
      res.requests.mean,
      res.requests.stddev,
      res.requests.min,
      res.requests.max,
      res.requests.total,
      res.requests.sent,
    ],
    [
      'latency',
      res.latency.average,
      res.latency.mean,
      res.latency.stddev,
      res.latency.min,
      res.latency.max,
      '--',
      '--',
    ],
    [
      'throughput',
      res.throughput.average,
      res.throughput.mean,
      res.throughput.stddev,
      res.throughput.min,
      res.throughput.max,
      res.throughput.total,
      '--',
    ],
  );

  percentileTable.push(
    ['0.001', res.requests.p0_001, res.latency.p0_001, res.throughput.p0_001],
    ['0.01', res.requests.p0_01, res.latency.p0_01, res.throughput.p0_01],
    ['0.1', res.requests.p0_1, res.latency.p0_1, res.throughput.p0_1],
    ['1', res.requests.p1, res.latency.p1, res.throughput.p1],
    ['2.5', res.requests.p2_5, res.latency.p2_5, res.throughput.p2_5],
    ['10', res.requests.p10, res.latency.p10, res.throughput.p10],
    ['25', res.requests.p25, res.latency.p25, res.throughput.p25],
    ['50', res.requests.p50, res.latency.p50, res.throughput.p50],
    ['75', res.requests.p75, res.latency.p75, res.throughput.p75],
    ['90', res.requests.p90, res.latency.p90, res.throughput.p90],
    ['97.5', res.requests.p97_5, res.latency.p97_5, res.throughput.p97_5],
    ['99', res.requests.p99, res.latency.p99, res.throughput.p99],
    ['99.9', res.requests.p99_9, res.latency.p99_9, res.throughput.p99_9],
    ['99.99', res.requests.p99_99, res.latency.p99_99, res.throughput.p99_99],
    [
      '99.999',
      res.requests.p99_999,
      res.latency.p99_999,
      res.throughput.p99_999,
    ],
  );

  extrasTable.push([
    res.errors,
    res.timeouts,
    res.duration,
    res.connections,
    res.pipelining,
  ]);

  non2xxTable.push([
    res.non2xx,
    res['1xx'],
    res['2xx'],
    res['3xx'],
    res['4xx'],
    res['5xx'],
  ]);

  const startTime = format(res.start, 'YYYY-MM-DD HH:mm:ss');
  const finishTime = format(res.finish, 'YYYY-MM-DD HH:mm:ss');

  console.log();

  console.log(`# ${res.title}`);
  console.log(`URL: ${res.url}`);

  console.log(primaryTable.toString());
  // console.log(percentileTable.toString());
  console.log(extrasTable.toString());
  console.log(non2xxTable.toString());

  console.log(`Time: ${startTime} ~ ${finishTime}`);

  console.log();
};
