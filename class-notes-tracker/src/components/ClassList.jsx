function ClassList() {
  return (
    <div className="py-10 px-6 sm:px-10 lg:px-20">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg p-6">
        <h1 className="text-xl font-bold">CLASS NAME</h1>
        <p className="text-gray-500">Calculus 2</p>

        <div className="flex justify-between pt-6">
          <p>🎓 23 Members</p>
          <p>📖 2 Notes</p>
        </div>
        <div className="flex space-x-3 pt-4">
          <p className="bg-gray-300 rounded-2xl px-4 py-1 text-center">Active</p>
          <p className="bg-white rounded-2xl border px-4 py-1 text-center">3 New</p>
        </div>
      </div>
    </div>
  )
}

export default ClassList