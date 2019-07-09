import { API_PATH } from './_env';

export default [
  // 所有課程
  {
    method: 'POST',
    path: `${API_PATH}/training/classes/new_calendar`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10000 },
      queryCriterias: [
        {
          connection: 'and',
          key: 'session.start_dtm',
          condition: '>=',
          value: '2019-06-29T16:00:00.000Z',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'session.end_dtm',
          condition: '<=',
          value: '2019-08-10T15:59:00.000Z',
          isValueADigital: false,
        },
      ],
    }),
  },
];
