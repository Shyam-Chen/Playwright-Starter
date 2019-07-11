import { API_PATH } from './_env';

export default [
  // 新增科目
  {
    method: 'POST',
    path: `${API_PATH}/training/lessons`,
    body: JSON.stringify([
      {
        name: '法文',
        types: [
          '_TRAINING_AD_1',
          '_TRAINING_AD_2',
          '_TRAINING_AD_3',
          'TRAINING_AD_4',
        ],
        content: '法文口說',
        length: 6,
        minGrade: 70,
        attachments: [{ fileId: '113' }],
        companyId: '269',
        prerequisiteIds: [17],
      },
    ]),
  },
  // 搜尋科目
  {
    method: 'POST',
    path: `${API_PATH}/training/lessons/list`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryOrderBies: [{ columnName: 'code', orderType: 'asc' }],
      queryCriterias: [
        {
          connection: 'and',
          key: 'company_id',
          condition: '=',
          value: '2',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'code',
          condition: 'like',
          value: '危害',
          isValueADigital: false,
        },
      ],
    }),
  },
  // 檢視科目
  {
    method: 'GET',
    path: `${API_PATH}/training/lessons/112`,
  },
  // 編輯科目
  {
    method: 'PUT',
    path: `${API_PATH}/training/lessons`,
    body: JSON.stringify([
      {
        id: 3,
        code: 'LS2019000003',
        name: '急救人員複訓課程',
        types: ['_TRAINING_AD_3', 'TRAINING_AD_4'],
        content: '外部訓練',
        length: 3,
        minGrade: 0,
        attachments: [],
        companyId: '2',
        prerequisiteIds: [],
      },
    ]),
  },
  // 刪除證書類別
  {
    method: 'DELETE',
    path: `${API_PATH}/training/certifications/categories/`,
    body: JSON.stringify([71]),
  },
];
