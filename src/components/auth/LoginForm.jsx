/* eslint-disable no-unused-vars */

import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email("Email invalid").required("Email is required"),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required("Password is required"),
});

const LoginForm = () => {
  const [showHide, setShowHide] = React.useState(false)
  const navigate = useNavigate()

  const handleShowHide = () => {
    setShowHide(!showHide)
  }

  const doLogin = (values) => {
    console.log(values)
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={doLogin}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
      }) =>
        <form onSubmit={handleSubmit} className="grid justify-center gap-5 text-start mt-10">
          <div className="grid gap-2 w-80">
            <label htmlFor="email">Email</label>
            <input
              className={`outline-none input input-bordered p-2 rounded-sm focus:outline-none hover:border-white focus:border-2 ${errors.email && touched.email ? 'border-red-500' : 'border-[1px] border-slate-600'}`}
              type="text"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email address"
            />
            {errors.email && touched.email ? (
              <div className="text-red-500">{errors.email}</div>
            ) : null}
          </div>
          <div className="grid gap-2 w-80">
            <div className='grid grid-cols-2 justify-between'>
              <label htmlFor="password">Password</label>
              <div className='text-end cursor-pointer hover:text-blue-500'>Forgot Password</div>
            </div>
            <div className="relative">
              <input
                className={`outline-none w-full input input-bordered p-2 rounded-sm focus:outline-none hover:border-white focus:border-2 ${errors.password && touched.password ? 'border-red-500' : 'border-[1px] border-slate-600'}`}
                type={showHide ? "text" : "password"}
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              />
              {
                showHide ? <FaEye onClick={handleShowHide} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-black cursor-pointer" /> : <FaEyeSlash onClick={handleShowHide} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl text-black cursor-pointer" />
              }
            </div>
            {errors.password && touched.password ? (
              <div className="text-red-500">{errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="p-3 outline outline-transparent bg-blue-600 rounded-lg text-white font-bold hover:scale-[1.01] hover:bg-blue-700 active:scale-[.9] duration-300"
          >
            Log in
          </button>
          <div className='flex justify-center gap-2'>
            <span>Don&apos;t have an account?</span>
            <div
              onClick={() => navigate('/signup')}
              className='text-blue-500 hover:text-blue-600 cursor-pointer'>Sign up</div>
          </div>
        </form>
      }
    </Formik>
  )
}

export default LoginForm
