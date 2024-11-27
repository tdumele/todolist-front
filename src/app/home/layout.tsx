import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {



  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-50 h-full p-4 border-r">
        <h2 className="text-lg font-bold mb-4">Your lists</h2>
        <div className="space-y-3">
          <label className="flex items-center cursor-pointer">
            <input type="radio" name="listType" value="personal" className="hidden" checked />
            <span className="w-5 h-5 bg-red-300 rounded-lg flex-shrink-0 ring-2 ring-offset-2 ring-gray-700"></span>
            <span className="ml-3 text-gray-700">Personal</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input type="radio" name="listType" value="work" className="hidden" />
            <span className="w-5 h-5 bg-blue-200 rounded-lg flex-shrink-0"></span>
            <span className="ml-3 text-gray-700">Work</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input type="radio" name="listType" value="completed" className="hidden" />
            <span className="w-5 h-5 bg-green-200 rounded-lg flex-shrink-0"></span>
            <span className="ml-3 text-gray-700">Completed</span>
          </label>
          <button className="mt-4 w-full p-2 bg-gray-200 rounded hover:bg-gray-300">
            + Create new list
          </button>
        </div>
      </div>
      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}