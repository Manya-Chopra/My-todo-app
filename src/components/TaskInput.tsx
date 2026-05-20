import {Button, TextField} from "@mui/material";
interface Props{
newTask:string;
setNewTask:React.Dispatch<React.SetStateAction<string>>;
handleAddTask:()=>void;
}
function TaskInput ({newTask, setNewTask,handleAddTask}:Props){
return (
 <div className="flex items-center gap-6 bg-gray-100 dark:bg-gray-700">
<TextField
variant="outlined"
size="medium"
label="Add New Task"
value={newTask}
onChange={(e)=> setNewTask(e.target.value)}
sx={{flex:1}} />
<Button variant="contained" 
onClick={handleAddTask}
className="
!bg-blue-600
hover:!bg-blue-700
!rounded-lg
!min-w-[90px]
!h-[52px]
!shadow-md
transition
">Add</Button>
</div>
)
}
export default TaskInput;