export default function Home() {
    const tasks = [
        { title: "Learning Figma", date: "2024/11/19 - 08:00" },
        { title: "Learning NextJS", date: "2024/11/17 - 17:00", overdue: true },
        { title: "Learning Mobile Dev", date: "2024/11/19 - 08:00" },
    ];

    return (
      <div className="flex-1 p-4">
          <h1 className="text-xl font-semibold mb-4">Good morning, Teddy! 👋</h1>
          <ul>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center mb-2 p-2 border ${
                    task.overdue ? "border-red-500 bg-red-50" : "border-gray-200"
                  } rounded`}
                >
                    <span>{task.title}</span>
                    <span className="text-sm text-gray-500">{task.date}</span>
                </li>
              ))}
          </ul>
          <button className="mt-4 bg-black text-white p-2 rounded">
              + Create new task
          </button>
      </div>
    );
}