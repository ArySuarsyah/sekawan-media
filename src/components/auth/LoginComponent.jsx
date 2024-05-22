// eslint-disable-next-line no-unused-vars
import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full bg-[#1d1d1d]'>
      <div className='flex flex-col gap-5 bg-[#fff] text-center w-96 p-14 rounded-lg'>
        <div className='flex flex-col items-center'>

          {/* Logo */}
          <div className='w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center'>
            <div className='w-[40%] h-[50%] bg-white rounded-r-full'>
            </div>
          </div>
          <h3 className='font-semibold'>Dashboard Kit</h3>
        </div>
        <div>
          <h4 className='text-2xl font-semibold mb-3 text-black'>Log In to Dashboard Kit</h4>
          <h6 className='text-xs text-gray-500'>Enter your email and your password below</h6>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
