import { API_PATH } from './_env';

export default [
  // 培訓記錄
  {
    method: 'POST',
    path: `${API_PATH}/training/records/employee/summary`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryCriterias: [],
    }),
  },
  // 員工基本資料
  {
    method: 'GET',
    path: `${API_PATH}/employees/250`,
  },
  // 員工培訓記錄
  {
    method: 'POST',
    path: `${API_PATH}/training/records/employee/250`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryCriterias: [
        {
          connection: 'and',
          key: 'class.status',
          condition: '=',
          value: '_TRAINING_AG_3',
          isValueADigital: false,
        },
      ],
    }),
  },
];
