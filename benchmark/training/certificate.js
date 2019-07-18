import { API_PATH } from './_env';

export default [
  // 新增證書
  {
    method: 'POST',
    path: `${API_PATH}/training/certifications`,
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
  // 搜尋證書
  {
    method: 'POST',
    path: `${API_PATH}/training/certifications/list/latest`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryOrderBies: [{ columnName: 'employee.code', orderType: 'asc' }],
      queryCriterias: [
        {
          connection: 'and',
          key: 'org.id',
          condition: '=',
          value: '2',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'certification.status',
          condition: '=',
          value: '_SYS_A9_2',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'certification_name',
          condition: 'like',
          value: '甲',
          isValueADigital: false,
        },
        {
          connection: 'or',
          key: 'certification_number',
          condition: 'like',
          value: '甲',
          isValueADigital: false,
        },
        {
          connection: 'or',
          key: 'category.code',
          condition: 'like',
          value: '甲',
          isValueADigital: false,
        },
      ],
    }),
  },
  // 編輯證書
  {
    method: 'PUT',
    path: `${API_PATH}/training/certifications`,
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
  // 刪除證書
  {
    method: 'DELETE',
    path: `${API_PATH}/training/certifications`,
    body: JSON.stringify([120]),
  },
];
