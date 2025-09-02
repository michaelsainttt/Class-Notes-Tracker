import ChatIcon from "../assets/1380370.png"

function Chat(){
    return(
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <img
        src={ChatIcon}
        alt="Chat Icon"
        className="w-20 h-20 mb-6 opacity-80"
      />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Select a class to start chatting
      </h2>
      <h4 className="text-gray-600 max-w-md">
        Choose a class from the dropdown above to join the conversation
      </h4>
    </div>
    );
}

export default Chat