export default function Home() {
  const tasks = [
    { title: 'Learning Figma', date: '2024/11/19 - 08:00' },
    { title: 'Learning NextJS', date: '2024/11/17 - 17:00', overdue: true },
    { title: 'Learning Mobile Dev', date: '2024/11/19 - 08:00' },
  ];

  return (
    <div className="flex-1 p-4">
      <h1 className="text-xl font-semibold mb-4">Good morning, Teddy! 👋</h1>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between  mb-2 p-2 border ${
              task.overdue ? 'border-red-500 bg-red-50' : 'bg-white'
            } rounded`}
          >
            <div className="flex items-center">
              <input type="checkbox" name="task" value={task.title} className={'w-5 h-5 rounded-lg mr-2'} />
              <span>{task.title}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 rounded-md bg-gray-300 px-2 py-1 mr-2">{task.date}</span>
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