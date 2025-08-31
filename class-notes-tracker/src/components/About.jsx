import studyImg from "../assets/places-to-study_mobile.jpg"

function About(){
  return(
    <div className = "py-30 bg-gray-100 text-black">
      <h1 className = "text-center text-5xl">About <span className = "underline font-bold">NoteSync</span></h1>
      <div className = "max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 p-10">
        <div className = "flex justify-center md:justify-end flex-1">
          <img src={studyImg} className = "rounded-2xl shadow-2xl 2-full max-w-sm"></img>
        </div>
        <div className="flex-1">
          <p className="text-lg leading-relaxed font-bold mb-4">
            NoteSync was built for students who are tired of losing track of their notes. 
            With simple organization, smart search, and collaboration tools, you can focus 
            on learning—not managing files. Track which lessons have notes and collaborate 
            with classmates easily. Spend less time managing files and more time learning.
          </p>
            <ul className="mt-6 space-y-2 text-lg">
            <li>📒 Organize notes by class and lecture</li>
            <li>🔍 Find any note instantly with search</li>
            <li>👥 Share and collaborate with peers</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default About