import { useState } from "react";

function Dashboard(){
    const [isOpen, setOpen] = useState(false);
    return(
        <div className = "min-h-screen bg-gray-300">
            <nav>
                <input placeholder = "Search notes and discussions..." type = "text" className = "border rounded-2xl bg-white w-96 h-10 text-lg p-4"></input>
                <button className = "bg-white w-35 h-10 rounded-xl text-left p-2">All Classes</button>
                <button className = "bg-gray-500 text-white w-35 h-10 rounded-xl font-light"><span className = "font-bold text-black text-xl">+</span> Share Note</button>
            </nav>
            <div>

            </div>
        </div>
    )
}

export default Dashboard