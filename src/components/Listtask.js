import React,{useState}from 'react'

const Listtask = ({task,removeTask,index}) => {
 
 
  
  
  return (
    <>
   
    <div className='list-tasks'>
    <input className="check-box"  type="checkbox" value="" id="" /> 
      <h3>{task.title}</h3>
      <button onClick={()=>{removeTask(index)}} className='delete-btn'>Delete</button>

    </div>
    </>
  )
}

export default Listtask