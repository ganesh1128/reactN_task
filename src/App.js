import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [toDoList, setToDo] = useState([]);

  useEffect( () => {
    fetchTaskList()
  }, [])

let fetchTaskList = async () => {
  try {
    let toDoListData = await axios.get("http://localhost:3000/list-all-todo");
    console.log(toDoListData );
    setToDo([...toDoListData.data]);
  } catch (error) {
    console.log(error);
  }

}


const [task,setTask] = useState("")
// const [status,setStatus] = useState(false)
  
let handleCreateTask = async () => {
    try {
       // eslint-disable-next-line
     let postdata = await axios.post("http://localhost:3000/create-task",{message:task})
     
     fetchTaskList();
     setTask("")
    } catch (error) {
      
    }

  }
 


  let handleChange = async (e,id) => {
    try {
       // eslint-disable-next-line
      let updatedata = await axios.put(`http://localhost:3000/update-task/${id}`,{status:e.target.checked})
      fetchTaskList();
     } catch (error) {
       
     }
  }


  let handleDelete = async (id) => {
    try {
       // eslint-disable-next-line
      let deleteData = await axios.delete(`http://localhost:3000/delete-task/${id}`)
      fetchTaskList();
    } catch (error) {
      alert(error)
      
    }

  }
 

  return (
    <div className="container">
      <div className="row">
        <h1>To Do</h1>
        <div className="col-lg-12">
          <div class="input-group mb-3">
            
            <input
              type="text"
              class="form-control"
              placeholder="Add Task..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={task}
              onChange={e => setTask(e.target.value)}
            
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleCreateTask}
            >
              Button
            </button>
          </div>
          <ul class="list-group">
            {toDoList.map((item) => {
              
              return (
                <li class="list-group-item">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    value=""
                    aria-label="..."
                    checked={item.status}
                    onChange={(e) => handleChange(e,item._id)}
                  />
                  <span style={{textDecoration : item.status ? "line-through" : ""}}>{item.message}</span>
                  <span class="badge bg-primary rounded-pill" onClick={() => {handleDelete(item._id)}}>X</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
