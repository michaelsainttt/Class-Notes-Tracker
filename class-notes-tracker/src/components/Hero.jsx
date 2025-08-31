import { useNavigate } from "react-router-dom";
import logo from "../assets/study-icon-19.png"
function Hero(){
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/login');
    }

    return(
        <div className="bg-[url('https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?cs=srgb&dl=pexels-keira-burton-6146978.jpg&fm=jpg')] bg-cover bg-center h-screen text-white">
            <nav className = "flex justify-between items-center p-10 px-30 sticky top-0">
              <div className = "flex space-x-3">
                <img src={logo} className = "size-10"></img>
                <h1 className = "text-3xl">NoteSync</h1>
              </div>
                <ul className = "flex flex-row space-x-6">
                  <li><a href = "/">Home</a></li>
                  <li><a href = "/">About</a></li>
                  <li><a href = "/">Study Tips</a></li>
                </ul>
              <button className = "border rounded-3xl px-6 p-2 hover:cursor-pointer hover:scale-110 transition bg-green-600 hover:bg-green-800" onClick = {handleClick}>Sign In</button>
            </nav>
            <div className = "flex flex-col justify-center items-center h-screen">
                <h1 className = "text-center text-7xl font-bold">Your Classes. Your Notes. Organized.</h1>
                <h1 className = "text-center text-1xl">Submit, Organize, and Track your Class notes all in one place.</h1>
                <button className = "text-center">Get Started</button>
            </div>
        </div>
    )
}

export default Hero