import React,{useState,useEffect} from 'react'
import "./Todo.css"
import Addtask from './Addtask'
import Listtask from './Listtask'


const Todoapp = () => {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [
    { title: 'messi', status: false },
    { title: 'neymar', status: false },
    { title: 'suarez', status: false },
  ];
  const [tasks,setTask]=useState(initialTasks)
  
  useEffect(()=>{
    document.title =`you have ${tasks.length} pending task`
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const savedValue = localStorage.getItem('tasks');

    if (savedValue) {
      setTask(JSON.parse(savedValue));
    }
  }, []);
  
  const addTask=(title)=>{
     const newTasks = [{title},...tasks]
     console.log(title);
     setTask(newTasks)
  }

  const removeTask=(index)=>{
    const newTasks=[...tasks]
    newTasks.splice(index,1);
    setTask(newTasks)
  }
  

 

  return (
    <>
        <div className="todo-container">
            <div className="header">Todo App</div>
            <div className='add-task'>
                <Addtask addTask={addTask} ></Addtask>
            </div>
            <div className='tasks'>
              {tasks.map((task,index)=>(
                 <Listtask task={task} removeTask={removeTask} index={index} key={index} />
              ))}
             
            </div>
        </div>
    </>
  )
}

export default Todoapp 