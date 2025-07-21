import React from 'react'
import Header from '../other/Header'
import TaskListCount from '../other/TaskListCount'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {

  return (
    <>
    <div className='p-10 bg-[#1C1C1C1C]'>
      
      <Header/>
      <TaskListCount/>
      <TaskList/>
    </div>
    </>
  )
}

export default EmployeeDashboard