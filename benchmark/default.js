import autocannon from 'autocannon';

autocannon({
  url: 'http://localhost:8000',
  connections: 10,
  pipelining: 1,
  duration: 10,
}, console.log);

autocannon({
  url: 'http://localhost:3000',
  connections: 10,
  pipelining: 1,
  duration: 10,
}, console.log);
