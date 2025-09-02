function Notetab({onClose}){
    return(
        <>
            <div onClick = {onClose} className = "fixed top-0 left-0 w-full h-full bg-black/40 z-10">

            </div>
            <div className = "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-2xl z-20">
                <h1>Testing</h1>
            </div>
        </>
    )
}

export default Notetab;