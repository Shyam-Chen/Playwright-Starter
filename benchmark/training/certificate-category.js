import { API_PATH } from './_env';

export default [
  // 新增證書類別
  {
    method: 'POST',
    path: `${API_PATH}/training/certifications/categories/list`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryCriterias: [],
      queryOrderBies: [{ columnName: 'id', orderType: 'desc' }],
    }),
  },
  // 搜尋證書類別
  {
    method: 'POST',
    path: `${API_PATH}/training/certifications/categories/list`,
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
  // 編輯證書類別
  {
    method: 'PUT',
    path: `${API_PATH}/training/certifications/categories/`,
    body: JSON.stringify({
      id: 78,
      companyId: 499,
      remindUserIds: [],
      code: '個資保護',
      periodUnit: '_SYS_AW_5',
      remindEmployee: true,
      remindFacilityContact: false,
      remindSupervisor: true,
      reminderBeforeExpiration: 5,
    }),
  },
  // 刪除證書類別
  {
    method: 'DELETE',
    path: `${API_PATH}/training/certifications/categories/`,
    body: JSON.stringify([71]),
  },
];
