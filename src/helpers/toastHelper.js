import { toast } from 'react-toastify';

export const toastError = err => {
  let message = null;
  if (typeof err === 'object' && err.message) {
    ({ message } = err);
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message);
  }
};

export const toastSuccess = () => {
  toast.success('Load data successfully!');
};
