import { API_PATH } from './_env';

export default [
  // 新增教師
  {
    method: 'POST',
    path: `${API_PATH}/training/instructors`,
    body: JSON.stringify([
      {
        orgIds: [102],
        code: null,
        type: '_TRAINING_AE_1',
        employeeId: 11,
        name: '陳昱嵐 Jenice Chen',
        status: '_SYS_A9_1',
        organization: null,
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
          key: 'type',
          condition: 'in',
          value: '_TRAINING_AE_3',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'status',
          condition: 'in',
          value: '_SYS_A9_1',
          isValueADigital: false,
        },
        {
          connection: 'and (',
          key: 'name',
          condition: 'like',
          value: '大',
          isValueADigital: false,
        },
        {
          connection: 'or',
          key: 'org_code',
          condition: 'like',
          value: '大',
          isValueADigital: false,
        },
        {
          connection: 'or',
          key: 'org_name',
          condition: 'like',
          value: '大',
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
];
