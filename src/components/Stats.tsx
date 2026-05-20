import {Typography} from "@mui/material";
interface Props {totalTasks: number;completedTasks: number;pendingTasks: number;}
function Stats({totalTasks,completedTasks,pendingTasks}: Props) {
  return (
    <div

  className="
  mt-10
  rounded-3xl
  p-6
  shadow-xl
  bg-gradient-to-r
  from-blue-500
  to-indigo-600
  dark:from-gray-700
  dark:to-gray-900
  text-white
"
    >
      <Typography variant="h6" className=" mb-4 !text-white !font-bold"></Typography>

      <Typography className="!text-white">Total: {totalTasks}</Typography>

      <Typography className="!text-white"> Completed: {completedTasks}</Typography>

      <Typography className="!text-white"> Pending: {pendingTasks}</Typography>

    </div>
  );
}

export default Stats;