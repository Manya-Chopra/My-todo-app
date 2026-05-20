import {Box, Button} from "@mui/material";
interface Props {
setFilter:React.Dispatch<React.SetStateAction<string>>;
}
function FilterButtons({setFilter}:Props){
return(
<div className="flex gap-4 mt-6 mb-6">

<Button variant="outlined"onClick={()=>setFilter("all")} className="hover:scale-105 transition">All</Button>
<Button variant="outlined"onClick={()=>setFilter("completed")} className="hover:scale-105 transition">Completed</Button>
<Button variant="outlined"onClick={()=>setFilter("Pending")} className="hover:scale-105 transition">Pending</Button>
</div>
);
}
export default FilterButtons;