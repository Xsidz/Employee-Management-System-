import React from 'react'
import Header from '../other/Header'
import TaskListCount from '../other/TaskListCount'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = ({data,logout}) => {

  return (
    <>
    <div className='p-10 bg-[#1C1C1C1C]'>
      
      <Header data={data} logout={logout} />
      <TaskListCount data={data}/>
      <TaskList data={data}/>
    </div>
    </>
  )
}

export default EmployeeDashboard