import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions';

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLogs = {
        descrioption: action.descrioption,
        operatedAt: action.operatedAt
      }
      return [operationLogs, ...state];
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return state;
  }
}

export default operationLogs;