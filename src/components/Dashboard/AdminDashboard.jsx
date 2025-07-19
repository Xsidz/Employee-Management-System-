import { useState } from "react";
import Header from "../other/Header";


const AdminDashboard = () => {
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: "",
    category: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const submitHandler = (e) => {
    e.preventDefault();
   
    console.log("Form Submitted:", formData);
    
  };

  return (
    
    <div className="min-h-screen w-full bg-black text-white p-4 md:p-10">
      
     

      <header className="mb-7">
         <Header/>
      </header>

      <div className="p-5 bg-[#1C1C1C] rounded-lg shadow-lg">
       
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:flex-row w-full items-start justify-between gap-8"
        >
          
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div>
              
              <label htmlFor="title" className="text-sm text-gray-300 mb-1 block">
                Task Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={(e)=>{setFormData({...formData,title:e.target.value})} }
                className="text-sm py-2 px-3 w-full rounded-md outline-none bg-transparent border border-gray-600 focus:border-emerald-500 transition-colors"
                placeholder="e.g., Design the new homepage"
                required
              />
            </div>

            <div>
              <label htmlFor="date" className="text-sm text-gray-300 mb-1 block">
                Due Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
               onChange={(e)=>{setFormData({...formData,date:e.target.value})} }
                className="text-sm py-2 px-3 w-full rounded-md outline-none bg-transparent border border-gray-600 focus:border-emerald-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="assignTo" className="text-sm text-gray-300 mb-1 block">
                Assign To
              </label>
              <input
                id="assignTo"
                name="assignTo"
                type="text"
                value={formData.assignTo}
               onChange={(e)=>{setFormData({...formData,assignTo:e.target.value})} }
                className="text-sm py-2 px-3 w-full rounded-md outline-none bg-transparent border border-gray-600 focus:border-emerald-500 transition-colors"
                placeholder="e.g., Jane Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="text-sm text-gray-300 mb-1 block">
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={(e)=>{setFormData({...formData,category:e.target.value})} }
                className="text-sm py-2 px-3 w-full rounded-md outline-none bg-transparent border border-gray-600 focus:border-emerald-500 transition-colors"
                placeholder="e.g., UI/UX Design"
                required
              />
            </div>
          </div>

          
          <div className="w-full md:w-1/2 flex flex-col h-full">
            <label htmlFor="description" className="text-sm text-gray-300 mb-1 block">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e)=>{setFormData({...formData,description:e.target.value})} }
              className="w-full flex-grow text-sm py-2 px-3 rounded-md outline-none bg-transparent border border-gray-600 focus:border-emerald-500 transition-colors"
              placeholder="Add a detailed description for the task..."
              rows="8"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 transition-colors py-3 px-5 rounded-md text-sm font-semibold mt-4 w-full"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
