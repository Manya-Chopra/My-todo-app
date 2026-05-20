import TaskItem from "./TaskItem";
import type { Task } from "../types/task";

interface Props {tasks: Task[];
handleToggle:(id: number) => void;
handleDelete:(id: number) => void;
handleEdit:(task: Task) => void;
handleSave:(id: number) => void;
editId: number | null;
editText: string;
setEditText:React.Dispatch<React.SetStateAction<string>>;
}

function TaskList({
  tasks,
  handleToggle,
  handleDelete,
  handleEdit,
  handleSave,
  editId,
  editText,
  setEditText
}: Props) {

  return (

    <ul className="space-y-4">

      {tasks.map((task) => (

        <TaskItem
          key={task.id}
          task={task}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSave={handleSave}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
        />

      ))}

    </ul>
  );
}

export default TaskList;