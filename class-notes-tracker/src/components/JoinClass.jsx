import { useState } from "react"
import JoinClassTab from "./JoinClassTab";

function JoinClass(){
    const [open, setOpen] = useState(false);
    return(
        <div>
            <button onClick = {() => setOpen(!open)}className="bg-gray-500 text-white h-10 rounded-xl font-light flex items-center gap-2 px-4"><span className="font-bold text-xl">+</span>Join Class</button>
            {open && (
                <JoinClassTab onClose = {() => setOpen(false)}/>
            )}
        </div>

    )
}

export default JoinClass