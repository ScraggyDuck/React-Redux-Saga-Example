import * as tasksApis from '../apis/tasks';

export const fetchListTasks = () => {
  return () => {
    tasksApis
      .getList()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
