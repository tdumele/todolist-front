'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useTasks } from '@/api/hook/useTasks';
import classNames from 'classnames';
import { GetTaskResponse } from '@/api/dto/GetTasksResponse';
import { updateTask } from '@/api/todolistClient';


export default function Home() {
  // TODO store it in context
  const [showFinishedTasks, setShowFinishedTasks] = useState(false);
  const { id } = useParams<{ id: string }>();
  const { tasks, loading, error } = useTasks({ todolistId: id });

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

  const liClassNames = (task: GetTaskResponse) => classNames({
    'flex': true,
    'items-center': true,
    'justify-between': true,
    'mb-2': true,
    'p-2': true,
    'border': true,
    'rounded': true,
    'bg-white': true,
    'border-red-500': isOverdue(task.dueDate),
    'bg-red-50': isOverdue(task.dueDate),
    'line-through': task.checked,
    'italic': task.checked,
    'text-gray-400': task.checked,
  });

  function completeTask(task: GetTaskResponse) {
    task.checked = !task.checked;
    updateTask(task, id).then(() => {
      console.log('Task updated');
    });
  }

  return (
    <div className="flex-1 p-4">
      <h1 className="text-3xl font-semibold mb-10">Good morning ! 👋</h1>

      <label className="inline-flex items-center cursor-pointer mb-2">
        <input type="checkbox" value="" className="sr-only peer" onChange={handleTaskCheck} />
        <div
          className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-green-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ms-3 text-sm font-medium">Show finished tasks</span>
      </label>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading tasks</p>}
      <ul>
        {tasks.map((task, index) => {

          if (!showFinishedTasks && task.checked) return null;
          else return (
            <li
              key={index}
              className={liClassNames(task)}
            >
              <div className="flex items-center">
                <input type="checkbox" name="task" defaultChecked={task.checked} className={'w-5 h-5 rounded-lg mr-2'}
                       onChange={() => completeTask(task)} />
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