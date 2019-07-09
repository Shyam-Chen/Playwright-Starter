import { API_PATH } from './_env';

export default [
  // 新增豁免
  {
    method: 'POST',
    path: `${API_PATH}/training/exemptions`,
    body: JSON.stringify([
      {
        reason: '_TRAINING_AI_1',
        startDtm: '2019-07-03T16:00:00.000Z',
        endDtm: '2030-01-31T16:00:00.000Z',
        comment: '出國',
        employeeId: '6',
      },
    ]),
  },
  // 搜尋豁免
  {
    method: 'POST',
    path: `${API_PATH}/training/exemptions/list`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryOrderBies: [{ columnName: 'id', orderType: 'asc' }],
      queryCriterias: [
        {
          connection: 'and',
          key: 'org_id',
          condition: '=',
          value: '17',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'start_dtm',
          condition: '>=',
          value: '2019-07-03T16:00:00Z',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'end_dtm',
          condition: '<=',
          value: '2033-07-05T16:00:00Z',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'code',
          condition: 'like',
          value: 'lan',
          isValueADigital: false,
        },
      ],
    }),
  },
  // 編輯豁免
  {
    method: 'PUT',
    path: `${API_PATH}/training/exemptions`,
    body: JSON.stringify([
      {
        id: 4,
        reason: '_TRAINING_AI_2',
        startDtm: '2019-07-04T16:00:00.000Z',
        endDtm: '2019-12-26T16:00:00.000Z',
        comment: '休息',
        employeeId: '10',
      },
    ]),
  },
  // 刪除豁免
  {
    method: 'DELETE',
    path: `${API_PATH}/training/exemptions`,
    body: JSON.stringify([6]),
  },
];
