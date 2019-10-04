import * as tasksTypes from '../constants/tasks';

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
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data
      };
    case tasksTypes.FETCH_TASKS_FAILED:
      return {
        ...state,
        listTasks: []
      };
    default:
      return state;
  }
};

export default reducer;
