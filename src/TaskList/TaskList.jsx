import React from 'react'

const TaskList = ({data}) => {
     const getTaskCardColor = (task) => {
    if (task.failed) return 'bg-red-500 hover:bg-red-600';
    if (task.completed) return 'bg-green-500 hover:bg-green-600';
    if (task.newTask) return 'bg-yellow-500 hover:bg-yellow-600';
    if (task.active) return 'bg-blue-500 hover:bg-blue-600';
    return 'bg-gray-600 hover:bg-gray-700'; // Fallback for tasks with no status
  };

    const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  return (
    <div
      id='tasklist'
      className="mt-10 w-full flex flex-col md:flex-row md:overflow-x-auto md:h-[55%] py-5 gap-5 md:flex-nowrap"
    >
      {data && data.tasks.length > 0 ? (
        data.tasks.map((task, index) => (
          <div
            key={index}
            // RESPONSIVE CARD:
            // - Default (Mobile): Takes the full width (`w-full`).
            // - Medium screens and up (`md:`): Switches to a fixed width and prevents shrinking.
            className={`w-full md:w-[300px] md:flex-shrink-0 rounded-xl p-5 text-white flex flex-col justify-between transition-colors duration-300 ${getTaskCardColor(task)}`}
          >
            {/* Card Content (no changes needed here) */}
            <div>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='bg-opacity-20 text-xs px-3 py-1 rounded-full font-semibold'>
                  {task.taskCategory}
                </h3>
                <h4 className='text-sm font-medium'>{formatDate(task.taskDate)}</h4>
              </div>
              <h2 className='text-xl font-bold break-words'>
                {task.taskTitle}
              </h2>
              <p className="text-sm mt-2 text-white text-opacity-90">
                {task.taskDescription}
              </p>
            </div>
            <div className="text-right mt-4">
                <button className="bg-black bg-opacity-25 text-white text-xs font-bold py-2 px-4 rounded-full hover:bg-opacity-40 transition-colors">
                    View Details
                </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center w-full p-10 bg-[#1c1c1c] rounded-lg">
          <h3 className="text-xl font-semibold text-gray-300">No tasks found.</h3>
          <p className="text-gray-500">This employee has a clear schedule!</p>
        </div>
      )}
    </div>
  )
}

export default TaskList