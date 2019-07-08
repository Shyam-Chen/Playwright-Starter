import autocannon from 'autocannon';

import { report } from '../_utils';
import { API_URL, API_PATH, RUN_SPEC, HEADERS_OPTS, LOGIN_FUNCS } from './_env';

(async () => {
  const token = await LOGIN_FUNCS.EHS();

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'instructor',
      url: API_URL,
      headers: { ...HEADERS_OPTS, token },
      requests: [
        // 新增教師
        {
          method: 'POST',
          path: `${API_PATH}/training/instructors`,
          body: JSON.stringify([
            {
              orgIds: [224],
              code: null,
              type: '_TRAINING_AE_1',
              employeeId: 172,
              name: 'Summer Liu',
              status: '_SYS_A9_1',
            },
          ]),
        },
        // 搜尋教師
        {
          method: 'POST',
          path: `${API_PATH}/training/instructors/list`,
          body: JSON.stringify({
            pagingTool: { currentPage: 1, pageSize: 10 },
            queryCriterias: [
              {
                connection: 'and',
                and: 'type',
                condition: 'in',
                value: '_TRAINING_AE_1,_TRAINING_AE_2,_TRAINING_AE_3',
                isValueADigital: false,
              },
              {
                connection: 'and',
                key: 'status',
                condition: 'in',
                value: '_SYS_A9_1,_SYS_A9_2',
                isValueADigital: false,
              },
              {
                connection: 'and (',
                key: 'name',
                condition: 'like',
                value: 'Summer',
                isValueADigital: false,
              },
              {
                connection: 'or',
                key: 'org_code',
                condition: 'like',
                value: 'Summer',
                isValueADigital: false,
              },
              {
                connection: 'or',
                key: 'org_name',
                condition: 'like',
                value: 'Summer',
                isValueADigital: false,
              },
              {
                connection: ')',
                key: '',
                condition: '',
                value: '',
                isValueADigital: true,
              },
            ],
            queryOrderBies: [{ columnName: 'id', orderType: 'desc' }],
          }),
        },
        // 檢視教師
        {
          method: 'GET',
          path: `${API_PATH}/training/instructors/103`,
        },
        // 編輯教師
        {
          method: 'PUT',
          path: `${API_PATH}/training/instructors`,
          body: JSON.stringify([
            {
              id: 103,
              orgIds: [524],
              code: 'TA2019000074',
              type: '_TRAINING_AE_3',
              name: 'ＱＡ測試-02',
              status: '_SYS_A9_1',
            },
          ]),
        },
        // 刪除教師
        {
          method: 'DELETE',
          path: `${API_PATH}/training/instructors`,
          body: JSON.stringify([99]),
        },
      ],
    },
    report,
  );
})();
