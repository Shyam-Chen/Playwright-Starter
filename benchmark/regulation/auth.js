import autocannon from 'autocannon';

const API_URL = 'http://qa.qehs.logicsolutions.com.tw/facts_backend-2.6/rest';

const spec = { connections: 300, duration: 5 };

const report = (err, res) => {
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

    [errors]      0
    [timeouts]    0
    [duration]    5.09
    [connections] 300
    [pipelining]  1
  `);
};

const auth = async () => {
  const login = await autocannon({
    ...spec,
    title: 'POST /permissions/login',
    url: `${API_URL}/permissions/login`,
    method: 'POST',
    body: JSON.stringify({
      userName: '050001',
      password: 'test',
    }),
  });

  console.log(login);


  // await autocannon({
  //   ...spec,
  // });
};

auth();
