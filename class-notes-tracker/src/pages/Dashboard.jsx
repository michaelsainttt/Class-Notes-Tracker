import SegmentedButton from "../components/SegmentedButton";
import ClassList from "../components/ClassList";
import DashboardSearch from "../components/DashboardSearch";
import Chat from "../components/Chat";
import { useState } from "react";
import JoinClass from "../components/JoinClass";

function Dashboard() {
  const [active, setActive] = useState(0)

  const renderContent = () => {
    switch(active){
      case 0: return <ClassList/>
      case 1: return <h1>Notes</h1>
      case 2: return <Chat />
      default: return <ClassList />
    }
  }
  return (
    <div className="min-h-screen bg-g ray-300 py-10 px-8">
      <DashboardSearch />

      <div className="py-10">
        <SegmentedButton active={active} setActive={setActive}/>
      </div>

      <div className="flex justify-between items-center mb-6">
        <input
          placeholder="Search classes..."
          type="text"
          className="border rounded-2xl bg-white w-96 h-10 text-lg px-4"
        />
        <JoinClass/>
      </div>

      <div>
        <h1 className="text-2xl mb-4">My Classes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;