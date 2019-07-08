import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, API_PATH, RUN_SPEC, HEADERS_OPTS, LOGIN_FUNCS } from './_env';

(async () => {
  const token = await LOGIN_FUNCS.EHS();

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'training-calendar',
      url: API_URL,
      headers: { ...HEADERS_OPTS, token },
      requests: [
        // 所有課程
        {
          method: 'POST',
          path: `${API_PATH}/training/classes/new_calendar`,
          body: JSON.stringify({
            pagingTool: { currentPage: 1, pageSize: 10000 },
            queryCriterias: [
              {
                connection: 'and',
                key: 'session.start_dtm',
                condition: '>=',
                value: '2019-06-29T16:00:00.000Z',
                isValueADigital: false,
              },
              {
                connection: 'and',
                key: 'session.end_dtm',
                condition: '<=',
                value: '2019-08-10T15:59:00.000Z',
                isValueADigital: false,
              },
            ],
          }),
        },
      ],
    },
    report,
  );
})();
