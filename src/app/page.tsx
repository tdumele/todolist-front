'use client';

import classNames from 'classnames';
import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from '@/validation/LoginFormValidation';
import { login } from '@/api/userClient';


export default function Home() {
  const [error, setError] = useState(false);
  const inputClasses = classNames(
    {
      'shadow': true,
      'appearance-none': true,
      'border': true,
      'rounded': true,
      'w-full': true,
      'py-2': true,
      'px-3': true,
      'text-gray-700': true,
      'leading-tight': true,
      'focus:outline-none': true,
      'focus:shadow-outline': true,
      'border-red-500': error,
    }
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

  function signing(data: LoginSchemaType) {
    login(data)
      .catch(() => setError(true)
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(signing)}>
            <p className="w-full mb-2 ">
              <span className="w-full block text-center mb-5 text-xl">Login</span>
            </p>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className={inputClasses}
                id="username" type="text" placeholder="Username"  {...register('username')}/>
              {errors.username && <p className="text-red-500 text-xs italic">{errors.username.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={inputClasses} {...register('password')}
                id="password" type="password" placeholder="******************"/>
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
              {error && <p className="text-red-500 text-sm italic mt-1">The couple id and password is invalid</p>}            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
                 href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center w-full block mb-2">
            Need an account ? <Link className={"text-indigo-500 hover:text-indigo-800"} href={'/signup'}>Sign Up</Link>
          </p>

          <p className="text-center text-gray-500 text-xs w-full block">
            &copy;2024 Teddy Dumélé corp. All rights reserved.
            </p>
        </div>
      </main>

    </div>
);
}
