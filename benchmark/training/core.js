export const API_URL = 'http://3.112.250.104:8090/facts_backend-2.6/rest';

export const RUN_SPEC = { connections: 300, duration: 5 };

export const report = (err, res) => {
  if (err) throw err;

  console.log(`
    # ${res.title}

    [requests]
      average: ${res.requests.average}
      mean:    ${res.requests.mean}
      stddev:  ${res.requests.stddev}
      min:     ${res.requests.min}
      max:     ${res.requests.max}
      total:   ${res.requests.total}
      sent:    ${res.requests.sent}

    [latency]
      average: ${res.latency.average}
      mean:    ${res.latency.mean}
      stddev:  ${res.latency.stddev}
      min:     ${res.latency.min}
      max:     ${res.latency.max}

    [throughput]
      average: ${res.throughput.average}
      mean:    ${res.throughput.mean}
      stddev:  ${res.throughput.stddev}
      min:     ${res.throughput.min}
      max:     ${res.throughput.max}
      total:   ${res.throughput.total}

    [errors]      ${res.errors}
    [timeouts]    ${res.timeouts}
    [duration]    ${res.duration}
    [connections] ${res.connections}
    [pipelining]  ${res.pipelining}


  `);
};
