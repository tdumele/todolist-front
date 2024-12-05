'use client';

import { ReactNode, useEffect, useState } from 'react';
import { GetTodolistsResponse } from '@/app/todolists.types';

export default function Layout({ children }: { children: ReactNode }) {

 const [todolists, setTodolists] = useState([] as GetTodolistsResponse[]);

  useEffect(() => {
    async function fetchTodolists() : Promise<GetTodolistsResponse[]> {
      const request = await fetch(process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL + '/api/v1/todolists');
      return request.json();
    }

    fetchTodolists().then((data) => setTodolists(data));
    todolists.map((todolist) => console.log(todolist));
  }, []);

  function randomColor() {
    const colors = [
      'bg-red-400',
      'bg-yellow-400',
      'bg-green-400',
      'bg-blue-400',
      'bg-indigo-400',
      'bg-purple-400',
      'bg-pink-400',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/4 bg-gray-50 h-auto md:h-full p-10 md:p-20 lg:p-40 border-r">
        <h2 className="text-lg font-bold mb-4">Your lists</h2>
        <div className="space-y-3">
          {todolists.map((todolist) => (
              <label key={todolist.id} className="flex items-center cursor-pointer">
                <input type="radio" name="listType" value={todolist.id} className="hidden" />
                <span className={`w-5 h-5 rounded-lg flex-shrink-0 ring-2 ring-offset-2 ring-gray-700 ${randomColor()}`}></span>
                <span className="ml-3 text-gray-700">{todolist.title}</span>
              </label>
            ),
          )}
          <button className="mt-4 w-full p-2 bg-gray-200 rounded hover:bg-gray-300">
            + Create new list
          </button>
        </div>
      </div>
      <main className="flex-1 bg-gray-100 p-10 md:p-20 lg:p-32">{children}</main>
    </div>
  );
}