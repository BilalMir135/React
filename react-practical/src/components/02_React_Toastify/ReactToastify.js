import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from './CustomToast';

export default function ReactToastify() {
  const notify = () => {
    toast('Wow so easy !');
    toast.success('Wow so easy !', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: false,
    });
    toast.warn('Wow so easy !', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.warning('Wow so easy !', { position: toast.POSITION.BOTTOM_RIGHT });
    toast.error('Wow so easy !', { position: toast.POSITION.BOTTOM_LEFT });
    toast.info(<CustomToast />, { position: toast.POSITION.BOTTOM_CENTER });
  };
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
