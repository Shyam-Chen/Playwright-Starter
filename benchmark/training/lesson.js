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
      title: 'lesson',
      url: API_URL,
      headers: { token: login.data.DATA.token },
      requests: [
        // 新增科目
        {
          method: 'POST',
          path: '/training/lessons',
          body: JSON.stringify({
            name: '資安概論',
            types: ['_TRAINING_AD_1', '_TRAINING_AD_3'],
            content: '測試0617',
            length: 30,
            minGrade: 60,
            attachments: [
              { fileId: '1578' },
              { fileId: '1579' },
              { fileId: '1580' },
              { fileId: '1581' },
            ],
            companyId: '253',
            prerequisiteIds: [77, 53, 34],
          }),
        },
        // 搜尋科目
        {
          method: 'POST',
          path: '/training/lessons/list',
          body: JSON.stringify({
            pagingTool: { currentPage: 1, pageSize: 10 },
            queryOrderBies: [{ columnName: 'code', orderType: 'asc' }],
            queryCriterias: [
              {
                connection: 'and',
                key: 'company_id',
                condition: '=',
                value: '253',
                isValueADigital: false,
              },
              {
                connection: 'and',
                key: 'code',
                condition: 'like',
                value: '001',
                isValueADigital: false,
              },
            ],
          }),
        },
        // 檢視科目
        {
          method: 'GET',
          path: '/training/lessons/112',
        },
        // 編輯科目
        {
          method: 'PUT',
          path: '/training/lessons',
          body: JSON.stringify([
            {
              id: 111,
              code: 'LS2019000014',
              name: '資安概論-03',
              types: ['_TRAINING_AD_1', '_TRAINING_AD_2', '_TRAINING_AD_3'],
              content: '測試0617-03',
              length: 50,
              minGrade: 71,
              attachments: [{ fileId: '1582' }, { fileId: '1583' }],
              companyId: '253',
              prerequisiteIds: [77],
            },
          ]),
        },
        // 排課

        // 刪除證書類別
        {
          method: 'DELETE',
          path: '/training/certifications/categories/',
          body: JSON.stringify([71]),
        },
      ],
    },
    report,
  );
})();