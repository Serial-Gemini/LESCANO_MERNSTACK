function StudentCard({ name, age, bday, studName, course }) {
  return (
    <div className="w-full max-w-sm bg-slate-800 border border-slate-700 rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Top Accent Bar */}
      <div className="h-2 bg-gradient-to-r from-sky-500 to-indigo-500" />
      
      <div className="p-6">
        {/* Header Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            {name}
          </h2>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mt-1">
            {course} Student
          </p>
        </div>

        {/* Divider line */}
        <div className="border-t border-slate-700/60 my-4" />

        {/* Profile Details List */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Alias:</span>
            <span className="text-slate-200 font-semibold bg-slate-900 px-2.5 py-1 rounded-md text-xs border border-slate-700">
              {studName}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Age:</span>
            <span className="text-slate-200 font-medium">{age} years old</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Birthday:</span>
            <span className="text-slate-200 font-medium">{bday}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
