import { call, fork, put, take } from 'redux-saga/effects';
import { fetchListTasksFailed, fetchListTasksSuccess } from '../actions/tasks';
import { getList } from '../apis/tasks';
import { STATUS_CODE } from '../constants';
import * as tasksTypes from '../constants/tasks';

function* watchFetchListTasksAction() {
  while (true) {
    yield take(tasksTypes.FETCH_TASKS);
    const res = yield call(getList);
    const { data, status } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTasksSuccess(data));
    } else {
      yield put(fetchListTasksFailed);
    }
  }
}

// function* watchCreateTaskAction() {
//   yield take(tasksTypes.FETCH_TASKS);
//   console.log('2');
// }

function* rootSaga() {
  yield fork(watchFetchListTasksAction);
  // yield fork(watchCreateTaskAction);
}

export default rootSaga;
