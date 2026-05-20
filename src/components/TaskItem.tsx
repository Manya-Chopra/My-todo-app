import {Button,Checkbox,ListItem,Typography,TextField} from "@mui/material";
import type { Task } from "../types/task";

interface Props {
task:Task;
handleToggle:(id:number)=>void;
handleDelete:(id:number)=>void;
handleEdit:(task: Task) => void;
handleSave:(id: number) => void;
editId: number | null;
editText: string;
setEditText:React.Dispatch<React.SetStateAction<string>>;
}

function TaskItem({
  task,
  handleToggle,
  handleDelete,
  handleEdit,
  handleSave,
  editId,
  editText,
  setEditText
}:Props) {

  return (
    <ListItem
      className="
        border
        border-gray-200
        dark:border-gray-700
        rounded-2xl
        mb-4
        px-5
        py-4
        flex
        items-start
        justify-between
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition
        bg-white
        dark:bg-gray-800">

      

      {editId === task.id ? (

        <>
          <div className="flex gap-4 flex-1">
            <TextField fullWidth
            value={editText}
            onChange={(e) =>
              setEditText(e.target.value)
            }
          />
          
          <Button variant="contained" size="small" onClick={() => handleSave(task.id)}>
            Save
          </Button>
          </div>
        </>

      ) : (

  <div className="flex items-start gap-4 flex-1">

  <Checkbox
    checked={task.completed}
    onChange={() =>
      handleToggle(task.id)
    }
    sx={{
    marginTop: "2px"
  }}/>

  <Typography
    className="
      flex-1
      leading-8
      text-lg
    ">
    {task.text} - {" "}

    {task.completed
      ? "Completed"
      : "Pending"}
  </Typography>

  <div className="flex gap-2">
  <Button
      variant="outlined"
      onClick={() =>
      handleEdit(task)
      }
      className="
        hover:scale-105
        transition">
      ✏️
    </Button>

    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={() =>
        handleDelete(task.id)
      } 
      className="
      hover:scale-105
      transition">
      🗑
</Button>
</div>
</div>    
)}
</ListItem>
);
}

export default TaskItem;