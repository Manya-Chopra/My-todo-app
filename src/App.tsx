import { useState,useEffect } from "react";
import TaskInput from "./components/TaskInput.js";
import FilterButtons from "./components/FilterButtons.js";
import type {Task} from "./types/task";
import TaskList from "./components/TaskList.js";
import Stats from "./components/Stats.js";
import {Container, Typography, Paper, Box} from "@mui/material";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState<string>("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState<string>("");
  const [darkMode,setDarkMode] =useState<Boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed === true;
    }

    if (filter === "Pending") {
      return task.completed === false;
    }

    return true;
  });
  useEffect(() => {

  const fetchTasks = async () => {
  try {const response = await fetch("https://dummyjson.com/todos");
  const data = await response.json();
  const formattedTasks = data.todos.map(
          (todo: any) => ({
            id: todo.id,
            text: todo.todo,
            completed: todo.completed
          })
        );
  setTasks(formattedTasks);
  setLoading(false);
  } catch (error) {
  setLoading(false);
  console.log("API Error:",error);
    }
  };
fetchTasks();
}, []);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const taskObj = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, taskObj]);
    setNewTask("");
  };

  const handleToggle = (id:number):void => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed
      };
    }
    return task;
  });
   setTasks(updatedTasks); 
};
const [editId, setEditId] = useState<number| null>(null);
const [editText, setEditText] = useState<string>("");


const handleEdit = (task:Task):void => {
  setEditId(task.id);
  setEditText(task.text);
};

const handleSave = (id:number):void => {
  const updatedTasks = tasks.map((task:Task) => {
    if (task.id === id) {
      return {
        ...task,
        text: editText
      };
    }
    return task;
  });

  setTasks(updatedTasks);
  setEditId(null);
  setEditText("");
};
const handleDelete = (id:number):void => {
const updatedTasks = tasks.filter((task) => task.id !== id);
setTasks(updatedTasks);
};
const totalTasks=tasks.length;
const completedTasks=tasks.filter((task)=>task.completed).length;
const pendingTasks=tasks.filter((task)=>!task.completed).length;
if (loading) {
return (
<div className="
        min-h-screen
        flex
        items-center
        justify-center
        text-3xl
        font-bold
        dark:text-white">
      Loading Tasks...
</div>

  );
}

  return (
    <div
  className={`
    min-h-screen
    transition-colors
    duration-500
    ${darkMode ? "dark bg-gray-900" : "bg-gray-100"}
  `}
>
    <Container
    maxWidth="sm"
    className="
    mt-10
    flex
    justify-center
  "
>
    
    <Paper
  elevation={6}
  sx={{
  backgroundColor:
  darkMode ? "#1f2937": "white",
  transition: "0.5s"
  }}
   className=" p-8 rounded-3xl shadow-xl"
>
    
   <div className="flex justify-end mb-4">

  <button onClick={() => setDarkMode(!darkMode)}
      className="px-4
      py-2
      rounded-xl
      bg-black
      text-white
      dark:bg-white
      dark:text-black
      transition
    "
  >
{darkMode? "☀️ Light": "🌙 Dark"}
</button>

</div>

<div className="text-center mb-10">
    
    <h1
    className={`
    text-4xl
    font-semibold
    tracking-normal
    text-center
    mb-2
    ${darkMode
      ? "text-white"
      : "text-gray-800"}
  `}
>
    Task Manager
    </h1>
    </div>
  <p className={`
    text-center
    text-base
    mb-8
    ${darkMode
      ? "text-gray-400"
      : "text-gray-500"}
  `}>
  Organize your daily tasks
</p>

    <TaskInput 
    newTask={newTask}
    setNewTask={setNewTask}
    handleAddTask={handleAddTask}/>

    <div className="mt-6">
    <FilterButtons setFilter={setFilter}/>
    </div>

    <div className="mt-8">
  <p
  className={`
    mt-2
    ${darkMode
      ? "text-gray-300"
      : "text-gray-500"}
  `}
>
  Tasks
</p>
    

       <TaskList
        tasks={filteredTasks}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleSave={handleSave}
        editId={editId}
        editText={editText}
        setEditText={setEditText}
      />
      </div>
      <div className="mt-8">
      <Stats
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        pendingTasks={pendingTasks}
      />
    </div>
    </Paper>
    </Container>
    </div>
  );
}

export default App;