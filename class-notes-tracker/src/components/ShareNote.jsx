import { useState } from "react"
import Notetab from "./Notetab";

function ShareNote(){

    const [note, setNote] = useState(false);

    return(
        <div>
            <button onClick = {() => setNote(!note)}className = "bg-gray-300 text-black w-44 h-10 rounded-xl font-light"><span className = "font-bold text-black text-xl">+</span> Share Note</button>
            {note && (
                <>
                    <Notetab onClose = {() => setNote(false)}/>
                </>
            )}
        </div>
    )
}

export default ShareNote;