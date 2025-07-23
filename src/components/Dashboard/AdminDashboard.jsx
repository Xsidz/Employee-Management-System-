import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = ({data ,users,logout}) => {
  return (
    <div className="min-h-screen w-full bg-black text-white p-4 md:p-10">
      <header className="mb-7">
        <Header data = {data} logout ={logout} />
      </header>
       <CreateTask/>
        <h1 className="mb-2">
        <span className="text-3xl font-semibold">All Tasks</span> 
      </h1>
       <AllTask adminData = {data} users={users}/>
    </div>
  );
};

export default AdminDashboard;
