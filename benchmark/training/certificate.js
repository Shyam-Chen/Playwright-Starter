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
      title: 'certificate',
      url: API_URL,
      headers: { token: login.data.DATA.token },
      requests: [
        {
          method: 'POST',
          path: '/training/certifications', // 新增證書
          body: JSON.stringify({
            certificationName: 'test',
            certificationNumber: 'AAA-1234',
            licenseIssuingAgency: '資訊處',
            renewalPeriod: 3,
            renewalPeriodUnit: '_SYS_AW_5',
            attachments: [
              { fileId: '1560' },
              { fileId: '1561' },
              { fileId: '1562' },
              { fileId: '1563' },
            ],
            employeeId: '176',
            categoryId: 66,
            accreditationDate: '2019-06-11',
            activationDate: '2019-06-13',
            expirationDate: null,
          }),
        },
        {
          method: 'POST',
          path: '/training/certifications/list/latest', // 檢視證書
          body: JSON.stringify({
            pagingTool: { currentPage: 1, pageSize: 50 },
            queryCriterias: [
              {
                connection: 'and',
                key: 'code',
                condition: 'like',
                value: '資訊倫理',
                isValueADigital: false,
              },
            ],
            queryOrderBies: [{ columnName: 'code', orderType: 'desc' }],
          }),
        },
        {
          method: 'PＵT',
          path: '/training/certifications', // 編輯證書
          body: JSON.stringify({
            id: 65,
            certificationName: '乙級化學技術士',
            certificationNumber: '00QAIR01',
            licenseIssuingAgency: '勞動部勞動力發展署技能檢定中心',
            renewalPeriod: 1,
            renewalPeriodUnit: '_SYS_AW_5',
            attachments: [{ fileId: '1585' }],
            employeeId: '151',
            categoryId: 40,
            accreditationDate: '2018-04-10',
            activationDate: '2019-06-21',
            expirationDate: '2019-07-20',
          }),
        },
        {
          method: 'DELETE',
          path: '/training/certifications', // 刪除證書
          body: JSON.stringify([120]),
        },
      ],
    },
    report,
  );
})();
