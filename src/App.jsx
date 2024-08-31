import React from 'react'
import {useState} from 'react'
import './App.css'
const App = () => {

  const [task,setTask] = useState([]);
  const [inputValue,setInputValue] = useState('');

  function onhandle(value)
  {
    if(value.trim())
    {
      setTask( (prevTask)=> [...prevTask,value])
      setInputValue('');
    }
  }

  function del(index) {
    setTask((prevTasks) => prevTasks.filter((task, ind) => ind !== index));
  }


  function moveUp(ind)
  {
    const newArr = [...task];
     if(ind>0)
     {
        [ newArr[ind],newArr[ind-1]] = [newArr[ind-1],newArr[ind]];
        setTask(newArr);
     }

  }

  function moveDown(ind)
  {
     const newArr = [...task]
     if(ind<task.length-1)
     {
      [newArr[ind],newArr[ind+1]]= [newArr[ind+1],newArr[ind]]
      setTask(newArr);
     }

  }

  return (
    <>
          <div className='container'>

                        <div className='heading'>
                              <h1>To-Do-List</h1>
                        </div>
                        
                        <div className="inputContainer">
                            <input type="text" value = {inputValue} className='newTask' placeholder='Enter the task' onChange={ (e)=>{ setInputValue(e.target.value)}} />
                            <button className='submit' onClick={ ()=>onhandle(inputValue)}>Add Task</button>
                        </div>

                        <div className='display'>

                                  {
                                    task.map( (tasks,index)=>
                                      
                                        <div className='task' key = {index}>
                                            <h1 className='value'>{tasks}</h1>
                                            <button className='edit'>Edit</button>
                                            <button className='delete' onClick={()=>del(index)}>Delete</button>
                                            <button className='up' onClick={()=>moveUp(index)}>Up</button>
                                            <button className='down' onClick={()=>moveDown(index)}>Down</button>
                                       </div>
                                      
                                    )
                                  }

                        </div>

          </div>
    </>
  )
}

export default App