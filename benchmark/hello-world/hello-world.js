import lighthouse from 'lighthouse';
import autocannon from 'autocannon';

lighthouse(
  'http://localhost:8000',
  { port: 9222 },
  {
    extends: 'lighthouse:default',
    settings: {
      onlyAudits: [
        'first-meaningful-paint',
        'speed-index-metric',
        'estimated-input-latency',
        'first-interactive',
        'consistently-interactive',
      ],
    },
  },
);

autocannon(
  {
    url: 'http://localhost:3000',
    connections: 10,
    pipelining: 1,
    duration: 10,
  },
  console.log,
);
