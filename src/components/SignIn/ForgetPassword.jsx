import React, { useState } from 'react';
import authSvg from '../../assests/forget.png';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
require("dotenv").config();


const ForgetPassword = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    textChange: 'Submit'
  });
  const { email, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .put(`https://rotaractmora.org/awurudu-backend/api/forgotpassword`, {
          email
        })
        .then(res => {

          setFormData({
            ...formData,
            email: '',
          });
          toast.success(`Please check your email`);

        })
        .catch(err => {
          console.log(err.response)
          toast.error(err.response.data.error);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-yellow-100 text-gray-900 flex justify-center'>
        <ToastContainer />
        <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
            <div className='mt-12 flex flex-col items-center'>
              <h1 className='text-2xl xl:text-3xl font-extrabold'>
                Forget Password
            </h1>
              <div className='w-full flex-1 mt-8 text-yellow-800'>

                <form
                  className='mx-auto max-w-xs relative '
                  onSubmit={handleSubmit}
                >
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-yello-100 border border-yellow-200 placeholder-yellow-500 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange('email')}
                    value={email}
                  />
                  <button
                    type='submit'
                    className='mt-5 tracking-wide font-semibold bg-gray-800 text-gray-100 w-full py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                  >
                    <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                    <span className='ml-3'>Submit</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex-1 bg-yellow-200 text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${authSvg})` }}
            ></div>
          </div>
        </div>
      ;
    </div>
    </>
  );
};

export default ForgetPassword;