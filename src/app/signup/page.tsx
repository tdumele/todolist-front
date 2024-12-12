'use client';

import classNames from 'classnames';
import { useState } from 'react';
import Link from 'next/link';


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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p className="w-full mb-2 ">
              <Link href={'/'} className={"text-indigo-500 hover:text-indigo-800 text-xs"}>&lt;back</Link>
              <br />
              <span className="w-full block text-center mb-5 text-xl">Sign Up</span>
            </p>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className={inputClasses}
                id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className={inputClasses}
                id="password" type="password" placeholder="******************" />
                {error && <p className="text-red-500 text-xs italic">Please choose a password.</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={inputClasses}
                id="email" type="email" placeholder="example@domain.com" />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Sign Up
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800"
                 href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs w-full block">
            &copy;2024 Teddy Dumélé corp. All rights reserved.
          </p>
        </div>
      </main>

    </div>
  );
}
