import Dropdown from "./Dropdown";
import ShareNote from "./ShareNote";

function DashboardSearch(){
return (
    <nav className = "flex justify-center-safe space-x-5">
                <input placeholder = "Search notes and discussions..." type = "text" className = "border rounded-2xl bg-white w-xl h-10 text-lg p-4"></input>
                <div>
                   <Dropdown />
                </div>
                <ShareNote/>

            </nav>
        )
}  
               
export default DashboardSearch;
                    
                
                