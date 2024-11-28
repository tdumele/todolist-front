export default function Home() {
  const tasks = [
    {
      id: 1,
      title: 'Learning Figma',
      description: 'Learn Figma for UI/UX Design',
      checked: false,
      date: '2024-12-12T12:00:00',
      category: {
        id: 1,
        title: 'Personal',
      },
    },
    {
      id: 1,
      title: 'Learning NextJS',
      description: 'Learn NextJS with TailwindCSS',
      checked: false,
      date: '2023-12-12T12:00:00',
      category: {
        id: 1,
        title: 'Personal',
      },
    },
    {
      id: 1,
      title: 'Learning Mobile Dev',
      description: 'Learn Mobile Dev with Flutter',
      checked: false,
      category: {
        id: 1,
        title: 'Personal',
      },
    },
  ];

  function isOverdue(date?: string) {
    if (date) {
      const currentDate = new Date();
      const taskDate = new Date(date);

      // If the task date is before the current date, it's overdue
      return taskDate < currentDate;
    }
    return false;
  }


  return (
    <div className="flex-1 p-4">
      <h1 className="text-3xl font-semibold mb-10">Good morning, Teddy! 👋</h1>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between  mb-2 p-2 border ${
              isOverdue(task.date) ? 'border-red-500 bg-red-50' : 'bg-white'
            } rounded`}
          >
            <div className="flex items-center">
              <input type="checkbox" name="task" value={task.title} className={'w-5 h-5 rounded-lg mr-2'} />
              <span>{task.title}</span>
            </div>
            <div className="flex items-center">
              { !!task.date && <span className="text-gray-700 rounded-md bg-gray-300 px-2 py-1 mr-2">{task.date}</span>}
              <button className=" w-8 h-8 rounded-lg bg-gray-300 hover:bg-gray-400">
                <div className="flex flex-col items-center space-y-1">
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                </div>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-black text-white p-2 rounded">
        + Create new task
      </button>
    </div>
  );
}