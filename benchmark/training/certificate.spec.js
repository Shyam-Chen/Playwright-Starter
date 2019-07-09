import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, RUN_SPEC, HEADERS_OPTS, LOGIN_FUNCS } from './_env';

import certificate from './certificate';

(async () => {
  const token = await LOGIN_FUNCS.Admin();

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'certificate',
      url: API_URL,
      headers: { ...HEADERS_OPTS, token },
      requests: [...certificate],
    },
    report,
  );
})();
