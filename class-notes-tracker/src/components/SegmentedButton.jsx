import { useState } from "react"

function SegmentedButton({active, setActive}){
  const segments = ["📖 Classes", "🖋️ Notes", "💬 Chat"]
    return (
        <div className="inline-flex border rounded-2xl overflow-hidden">
      {segments.map((label, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`
            px-6 py-2 text-sm font-medium transition
            ${active === index ? "bg-white text-black" : "bg-gray-400 text-black hover:bg-gray-100"}
            ${index < segments.length - 1 ? "border-r" : ""}
          `}
        >
          {label}
        </button>
      ))}
        
    </div>
    )
}

export default SegmentedButton