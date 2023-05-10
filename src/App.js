
import { useState } from 'react'

import './App.css'
import addicon from "./add.png"

function App() {
  const [mylist, setMylist] = useState([])

  const [task, setTask] = useState("")

  function addTask(){
    setMylist([...mylist, task])
    setTask("")

  }

  function deleteTask(index){
    mylist.splice(index, 1);
    setMylist([...mylist])
  }
  
  return (
    <div className='container'>
      <h1>TO-DO LIST!! 📃</h1>
     <div className='list-group'>
      {
        mylist.map((elem, index)=>{
          return (
            <div className='elem'>
            {elem}

            <span className='delete' onClick={()=>{
              deleteTask(index)
            }}>&nbsp;&nbsp;&nbsp;🗑️</span>
            </div>
          )

        })
      }

     </div>

     <div className='input-container'>
       <input  type='text' className='input' placeholder='Enter tasks' value={task}
      onChange={(e)=>{
        setTask(e.target.value)
      }}/>
      <img src={addicon} className='icon' onClick={addTask} alt='button'/>
     </div>
    </div>
    
  );
}

export default App;
