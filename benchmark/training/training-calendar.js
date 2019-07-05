import autocannon from 'autocannon';
import axios from 'axios';

import { report } from '../_utils';
import { API_URL, RUN_SPEC } from './_env';

(async () => {
  const login = await axios.post(`${API_URL}/permissions/login`, {
    userName: 'admin',
    password: 'test',
  });

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'training-calendar',
      url: API_URL,
      headers: { token: login.data.DATA.token },
      requests: [
        // 所有課程
        {
          method: 'POST',
          path: '/training/classes/new_calendar',
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
