import autocannon from 'autocannon';
import axios from 'axios';

import { API_URL, RUN_SPEC, report } from './core';

const instructor = async () => {
  const login = await axios.post(`${API_URL}/permissions/login`, {
    userName: 'admin',
    password: 'test',
  });

  await autocannon({
    ...RUN_SPEC,
    title: 'instructor',
    url: API_URL,
    headers: { token: login.data.DATA.token },
    requests: [
      {
        method: 'POST',
        path: '/training/instructors',
        body: JSON.stringify([{"orgIds":[224],"code":null,"type":"_TRAINING_AE_1","employeeId":172,"name":"Summer Liu","status":"_SYS_A9_1"}]),
      },
      {
        method: 'POST',
        path: '/training/instructors/list',
        body: JSON.stringify({
          pagingTool: { currentPage: 1, pageSize: 10 },
          queryCriterias: [
            { connection: 'and', and: 'type', 'condition': 'in', 'value': '_TRAINING_AE_1,_TRAINING_AE_2,_TRAINING_AE_3', 'isValueADigital': false },
            { connection: 'and', key: 'status', 'condition': 'in', 'value': '_SYS_A9_1,_SYS_A9_2', 'isValueADigital': false },
            { connection: 'and (', key: 'name', 'condition': 'like', 'value': 'Summer', 'isValueADigital': false },
            { connection: 'or', key: 'org_code', 'condition': 'like', 'value': 'Summer', 'isValueADigital': false },
            { connection: 'or', key: 'org_name', 'condition': 'like', 'value': 'Summer', isValueADigital: false },
            { connection: ')', key: '', condition: '', value: '', isValueADigital: true },
          ],
          queryOrderBies: [{ columnName: 'id', orderType: 'desc' }],
        }),
      },
      {
        method: 'DELETE',
        path: '/training/instructors',
        body: JSON.stringify([99]),
      },
    ],
  }, report);
};

instructor();
