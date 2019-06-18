import autocannon from 'autocannon';
import axios from 'axios';

import { report } from '../_utils';
import { API_URL, RUN_SPEC } from './_env';

const certificateCategory = async () => {
  const login = await axios.post(`${API_URL}/permissions/login`, {
    userName: 'admin',
    password: 'test',
  });

  await autocannon(
    {
      ...RUN_SPEC,
      title: 'certificate-category',
      url: API_URL,
      headers: { token: login.data.DATA.token },
      requests: [
        {
          method: 'POST',
          path: '/training/certifications/categories/list', // 新增證書類別
          body: JSON.stringify({
            pagingTool: { currentPage: 1, pageSize: 10 },
            queryCriterias: [],
            queryOrderBies: [{ columnName: 'id', orderType: 'desc' }],
          }),
        },
        {
          method: 'POST',
          path: '/training/certifications/categories/list', // 搜尋證書類別
          body: JSON.stringify({
            pagingTool: { currentPage: 1, pageSize: 10 },
            queryCriterias: [
              {
                connection: 'and',
                key: 'company_id',
                condition: '=',
                value: '223',
                isValueADigital: false,
              },
              {
                connection: 'and (',
                key: 'code',
                condition: 'like',
                value: '270',
                isValueADigital: false,
              },
              {
                connection: 'or',
                key: 'reminder_before_expiration',
                condition: 'like',
                value: '270',
                isValueADigital: false,
              },
              { connection: ')', key: '', condition: '', value: '', isValueADigital: true },
            ],
            queryOrderBies: [{ columnName: 'id', orderType: 'desc' }],
          }),
        },
        {
          method: 'DELETE',
          path: '/training/certifications/categories/',
          body: JSON.stringify([71]),
        },
      ],
    },
    report,
  );
};

certificateCategory();
