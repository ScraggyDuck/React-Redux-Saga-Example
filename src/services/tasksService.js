import axios from 'axios';

class TasksService {
  constructor() {
    const instance = axios.create();
    this.instance = instance;
  }

  handleSuccess(res) {
    return res;
  }

  handleError(err) {
    return Promise.reject(err);
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new TasksService();
