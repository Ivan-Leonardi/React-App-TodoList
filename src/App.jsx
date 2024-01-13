import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import axios from "axios";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TaskDetails from "./components/TeskDetails";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      
      setTasks(data);
    };    

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return {
          ...task,
          completed: !task.completed
        }
      return task;
    }
    );
    setTasks(newTasks);
  };

  const handletaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ];
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className="container">
        <Header /> 
        <Routes>       
          <Route
          path="/" 
          exact       
          element={
            <div>
              <AddTask
                handletaskAddition={handletaskAddition}
              />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion} />
            </div>
          }
        /> 
        <Route 
        path="/:taskTitle"
        exact
        element={
          <TaskDetails />
        }
        />
        </Routes>             
      </div>
    </Router>

  )
}

export default App;
