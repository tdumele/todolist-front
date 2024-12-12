'use client';

import { useEffect, useState } from 'react';
import { GetTasksResponse } from '@/app/home/[id]/page.types';
import { useParams } from 'next/navigation';


export default function Home() {
  // TODO store it in context
  const [showFinishedTasks, setShowFinishedTasks] = useState(false);
  const [tasks, setTasks] = useState<GetTasksResponse | []>([]);
  const { id } = useParams<{ id: string } >()

  useEffect(() => {
    async function fetchTasks() : Promise<GetTasksResponse> {
      const request = await fetch(process.env.NEXT_PUBLIC_TODOLIST_MS_BASEURL + `/api/v1/todolists/${id}/tasks`);
      return request.json();
    }
    fetchTasks().then(data => setTasks(data));
  }, [id] );

  function isOverdue(date?: string) {
    if (date) {
      const currentDate = new Date();
      const taskDate = new Date(date);

      // If the task date is before the current date, it's overdue
      return taskDate < currentDate;
    }
    return false;
  }

  function handleTaskCheck() {
    setShowFinishedTasks(!showFinishedTasks);
  }


  return (
    <div className="flex-1 p-4">
      <h1 className="text-3xl font-semibold mb-10">Good morning, Teddy! 👋</h1>

      <label className="inline-flex items-center cursor-pointer mb-2">
        <input type="checkbox" value="" className="sr-only peer" onChange={handleTaskCheck} />
        <div
          className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-green-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ms-3 text-sm font-medium">Show finished tasks</span>
      </label>

      <ul>
        {tasks.map((task, index) => {

          if (!showFinishedTasks && isOverdue(task.dueDate)) return null;
          else return (
            <li
              key={index}
              className={`flex items-center justify-between  mb-2 p-2 border ${
                isOverdue(task.dueDate) ? 'border-red-500 bg-red-50' : 'bg-white'
              } rounded`}
            >
              <div className="flex items-center">
                <input type="checkbox" name="task" value={task.title} className={'w-5 h-5 rounded-lg mr-2'} />
                <span>{task.title}</span>
              </div>
              <div className="flex items-center">
                {!!task.dueDate &&
                  <span className="text-gray-700 rounded-md bg-gray-300 px-2 py-1 mr-2">{task.dueDate}</span>}
                <button className=" w-8 h-8 rounded-lg bg-gray-300 hover:bg-gray-400">
                  <div className="flex flex-col items-center space-y-1">
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  </div>
                </button>
              </div>
            </li>);
        })}
      </ul>
      <button className="mt-4 bg-black text-white p-2 rounded">
        + Create new task
      </button>
    </div>
  );
}