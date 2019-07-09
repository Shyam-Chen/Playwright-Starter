import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, RUN_SPEC, HEADERS_OPTS, LOGIN_FUNCS } from './_env';

import auth from './auth';

import lesson from './lesson';
import instructor from './instructor';
import classScheduling from './class-scheduling';
import trainingCalendar from './training-calendar';
import trainingRecord from './training-record';
import exemptionUtility from './exemption-utility';

import certificate from './certificate';
import certificateCategory from './certificate-category';

(async () => {
  const token = await LOGIN_FUNCS.Admin();

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'training',
      url: API_URL,
      headers: { ...HEADERS_OPTS, token },
      requests: [
        ...auth,

        ...lesson,
        ...instructor,
        ...classScheduling,
        ...trainingCalendar,
        ...trainingRecord,
        ...exemptionUtility,

        ...certificate,
        ...certificateCategory,
      ],
    },
    report,
  );
})();
