// import * as tasksApis from '../apis/tasks';
import * as tasksContants from '../constants/tasks';

export const fetchListTasks = () => {
  return {
    type: tasksContants.FETCH_TASKS
  };
};

export const fetchListTasksSuccess = data => {
  return {
    type: tasksContants.FETCH_TASKS_SUCCESS,
    payload: {
      data
    }
  };
};

export const fetchListTasksFailed = err => {
  return {
    type: tasksContants.FETCH_TASKS_FAILED,
    payload: {
      err
    }
  };
};

// export const fetchListTasksRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTasks());
//     tasksApis
//       .getList()
//       .then(res => {
//         const { data } = res;
//         dispatch(fetchListTasksSuccess(data));
//       })
//       .catch(err => {
//         dispatch(fetchListTasksFailed(err));
//       });
//   };
// };
