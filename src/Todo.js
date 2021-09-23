import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import env from "./settings";
import { useHistory } from "react-router-dom";

function Todo() {
  const [toDoList, setToDo] = useState([]);
  const[task,setTask] = useState("");
  let history = useHistory();

  useEffect(() => {
    fetchTaskList();
  }, []);

  let fetchTaskList = async () => {
    try {
      let toDoListData = await axios.get(
        `${env.api}/list-all-todo`,{
          headers : {
            "Authorization" : window.localStorage.getItem("app_token")
          }
        }
      );
      console.log(toDoListData);
      setToDo([...toDoListData.data]);
    } catch (error) {
      console.log(error);
    }
  };

  
  // const [status,setStatus] = useState(false)

  let handleCreateTask = async () => {
    try {
      // eslint-disable-next-line
      let postdata = await axios.post(
       ` ${env.api}/create-task`,
        { message: task },{
          headers : {
            "Authorization" : window.localStorage.getItem("app_token")
          }
        }
      );

      fetchTaskList();
      setTask("");
    } catch (error) {}
  };

  let handleChange = async (e, id) => {
    try {
      // eslint-disable-next-line
      let updatedata = await axios.put(
        `${env.api}/update-task/${id}`,
        { status: e.target.checked },{
          headers : {
            "Authorization" : window.localStorage.getItem("app_token")
          }
        }
      );
      fetchTaskList();
    } catch (error) {}
  };

  let handleDelete = async (id) => {
    try {
      // eslint-disable-next-line
      let deleteData = await axios.delete(
        `${env.api}/delete-task/${id}`,{
          headers : {
            "Authorization" : window.localStorage.getItem("app_token")
          }
        }
      );
      fetchTaskList();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container">
      <button className="btn btn-danger mt-2" onClick={() => {
          window.localStorage.removeItem("app_token")
          history.push("/login")
        }}>log out</button>
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
              onChange={(e) => setTask(e.target.value)}
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
                    onChange={(e) => handleChange(e, item._id)}
                  />
                  <span
                    style={{
                      textDecoration: item.status ? "line-through" : "",
                    }}
                  >
                    {item.message}
                  </span>
                  <span
                    class="badge bg-primary rounded-pill"
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
