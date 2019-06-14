import lighthouse from 'lighthouse';

lighthouse('http://localhost:8000', { port: 9222 }, {
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
});
