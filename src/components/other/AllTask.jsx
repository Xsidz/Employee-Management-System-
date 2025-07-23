import React from "react";

const AllTask = ({ adminData, users }) => {
  const getTaskCardColor = (task) => {
    if (task.failed) return "bg-red-500 hover:bg-red-600";
    if (task.completed) return "bg-green-500 hover:bg-green-600";
    if (task.newTask) return "bg-yellow-500 hover:bg-yellow-600";
    if (task.active) return "bg-blue-500 hover:bg-blue-600";
    return "bg-gray-600 hover:bg-gray-700"; // Fallback for tasks with no status
  };
  const getStatus = (task) => {
    if (task.completed) return "Completed";
    if (task.failed) return "Failed";
    if (task.active) return "Active";
    return "Pending"; // Default status if none of the above
  };

  const filtereduser = users.employees.filter((employee) =>
    employee.tasks.some((task) => task.adminName == adminData.name.toString())
  );
  const allTask = filtereduser.flatMap((employee) =>
    employee.tasks.map((task) => ({
      employeeName: employee.name,
      employeeId: employee.id,
      ...task,
    }))
  );

  console.log(allTask);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded  h-100 overflow-auto">
      <div className="bg-white mb-3 py-2 px-4 flex justify-between rounded ">
        <h2 className="font-bold text-xl text-black ">Employee</h2>
        <h2 className="font-bold text-xl  text-black">Task</h2>
        <h2 className="font-bold text-xl  text-black">Status</h2>
      </div>

      {users && filtereduser.length > 0 ? (
        allTask.map((task, index) => (
          <div
            key={index}
            className={` ${getTaskCardColor(
              task
            )}  mb-3 py-2 px-4 flex justify-between rounded text-lg`}>
            <h2>{task.employeeName}</h2>
            <h3>{task.taskTitle}</h3>
            <h5>{getStatus(task)}</h5>
          </div>
        ))
      ) : (
        <div className="text-center w-full p-10 bg-[#1c1c1c] rounded-lg">
          <h3 className="text-xl font-semibold text-gray-300">
            No tasks found.
          </h3>
          <p className="text-gray-500">This employee has a clear schedule!</p>
        </div>
      )}
    </div>
  );
};

export default AllTask;
