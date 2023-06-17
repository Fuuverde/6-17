import React,{useState} from "react";
import "./App.css";

function App(){
  const [task,setTask]=useState('');
  const [taskList,setTaskList]=useState([]);

  const addTask =()=> {
    if (task.trim()!== "") {
      setTaskList([...taskList,task]);
      setTask("");
    }
  };

  const deleteTask=(index)=>{
    const updatedTaskList=taskList.filter((_,i)=>i!==index);
    setTaskList(updatedTaskList);
  };

  return(
    <div>
      <h1>to do リスト</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input
         className="task_value"
         type="text"
         value={task}
         onChange={(e)=>setTask(e.target.value)}
        />
        <button className="task_submit"type="button"onClick={addTask}>
          追加
        </button>
      </form>
      <div id="table">
        <h2>リスト</h2>
        <ul className="task_list">
          {taskList.map((task,index)=>(
            <li key={index}>
              {task}
              <button onClick={()=>deleteTask(index)}>消す</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;