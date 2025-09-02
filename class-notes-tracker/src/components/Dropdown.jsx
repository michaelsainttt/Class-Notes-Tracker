import { useState } from "react";

function Dropdown(){
    const [open, setOpen] = useState(false);
    return(
        <div className ="bg-gray-300 w-44 h-10 rounded-xl text-left p-2">
            <button onClick = {() => setOpen(!open)}>All Classes</button>
            {open && (
                <div>
                    <h1>Math</h1>
                    <h1>Science</h1>
                </div>
            )}
        </div>
    );
}

export default Dropdown