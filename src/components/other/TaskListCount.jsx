import React from "react";

const TaskListCount = ({data}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10 p-4">
      {/* New Task Card */}
      <div className="bg-[#8B5CF6] text-white p-6 rounded-xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow-lg flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-2"> {data?.taskCount?.newTask} </h2>
        <h3 className="text-xl font-medium">New Tasks</h3>
      </div>

      {/* Pending Task Card */}
      <div className="bg-[#3B82F6] text-white p-6 rounded-xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow-lg flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-2">{data?.taskCount?.active}</h2>
        <h3 className="text-xl font-medium">Active Tasks</h3>
      </div>

      {/* Completed Task Card */}
      <div className="bg-green-500 text-white p-6 rounded-xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow-lg flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-2">{data?.taskCount?.completed}</h2>
        <h3 className="text-xl font-medium">Completed Tasks</h3>
      </div>

      {/* Overdue Task Card */}
      <div className="bg-red-500 text-white p-6 rounded-xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] shadow-lg flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-2">{data?.taskCount?.failed}</h2>
        <h3 className="text-xl font-medium">Overdue Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListCount;
