import { useNavigate } from "react-router-dom"


function LoginPage(){
    const navigate = useNavigate();
    return(
        <div className = "flex items-center justify-center min-h-screen bg-[url('https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover">
            <h1 className = "absolute top-4 left-6 text-3xl text-white drop-shadow-2xl hover:cursor-pointer" onClick = {() => navigate("/")}>NoteSync</h1>
            <div className = "w-full max-w-sm bg-white rounded-3xl shadow-xl p-8" >
                <h1 className = "text-center text-4xl font-bold mb-6">Login</h1>

                <form className = "space-y-4">
                        <div>
                            <input type = "text" placeholder = "User Name" required className = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"/> 
                        </div>
                        <div>
                            <input placeholder = "Password" type = "password" required className = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"/>
                        </div>
                        <button type = "submit" className = "w-full py-2 bg-green-600 text-white font-medium rounded-xl hover:bg-green-800 transition hover:cursor-pointer">Submit</button>
                </form>
                <div className ="mt-4 space-y-2 text-center text-sm text-gray-600">
                    <a href="#"><h1>Forgot Password? 🔐</h1></a>
                    <h1>Don't have account? <a href="#">Sign Up 📝</a></h1>
                </div>

            </div>
        </div>
    
    )
}

export default LoginPage