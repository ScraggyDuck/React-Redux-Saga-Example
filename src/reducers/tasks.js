import * as tasksTypes from '../constants/tasks';
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listTasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksTypes.FETCH_TASKS:
      return {
        ...state,
        listTasks: []
      };
    case tasksTypes.FETCH_TASKS_SUCCESS:
      toastSuccess();
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data
      };
    case tasksTypes.FETCH_TASKS_FAILED:
      const { err } = action.payload;
      toastError(err);
      return {
        ...state,
        listTasks: []
      };
    default:
      return state;
  }
};

export default reducer;
