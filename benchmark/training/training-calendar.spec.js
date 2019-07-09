import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, RUN_SPEC, HEADERS_OPTS, LOGIN_FUNCS } from './_env';

import trainingCalendar from './training-calendar';

(async () => {
  const token = await LOGIN_FUNCS.Admin();

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'training-calendar',
      url: API_URL,
      headers: { ...HEADERS_OPTS, token },
      requests: [...trainingCalendar],
    },
    report,
  );
})();
