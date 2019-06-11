import autocannon from 'autocannon';
import axios from 'axios';

import { report } from '../_utils';
import { API_URL, RUN_SPEC } from './_env';

const certificate = async () => {
  const login = await axios.post(`${API_URL}/permissions/login`, {
    userName: 'admin',
    password: 'test',
  });

  await autocannon({
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
          attachments: [{ fileId: '1560' }, { fileId: '1561' }, { fileId: '1562' }, { fileId: '1563' }],
          employeeId: '176',
          categoryId: 66,
          accreditationDate: '2019-06-11',
          activationDate: '2019-06-13',
          expirationDate: null,
        }),
      },
      {
        method: 'POST',
        path: '/training/certifications/list/latest', // 搜尋證書
        body: JSON.stringify({
          pagingTool: { currentPage: 1, pageSize: 20 },
          queryOrderBies: [{ columnName: 'employee.code', orderType: 'asc' }],
          queryCriterias: [
            { connection: 'and', key: 'activation_date', condition: '>=', value: '2019-06-10T16:00:00Z', isValueADigital: false },
            { connection: 'and', key: 'certification.status', condition: '=', value: '_SYS_A9_1', isValueADigital: false },
            { connection: 'and', key: 'certification_name', condition: 'like', value: '資訊安全', isValueADigital: false }],
        }),
      },
      {
        method: 'DELETE',
        path: '/training/certifications', // 刪除證書
        body: JSON.stringify([120]),
      },
    ],
  }, report);
};

certificate();
