function Sidebar({
  activeView,
  setActiveView,
  setSearchQuery,
  tasksByDate,
  setSelectedDate,
}) {
  return (
    <div className="w-64 border-r border-gray-200 p-5">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border rounded-lg p-2 mb-6"
      />

      <h3 className="text-sm text-gray-500 mb-2">TASKS</h3>

      <ul className="space-y-2 text-gray-700">
        <li
          onClick={() => setActiveView("upcoming")}
          className={`p-2 rounded cursor-pointer ${
            activeView === "upcoming" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
          }`}
        >
          Upcoming
        </li>

        <li
          onClick={() => setActiveView("today")}
          className={`p-2 rounded cursor-pointer ${
            activeView === "today" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
          }`}
        >
          Today
        </li>

        <li
          onClick={() => setActiveView("calendar")}
          className={`p-2 rounded cursor-pointer ${
            activeView === "calendar" ? "bg-gray-100 font-medium" : "hover:bg-gray-100"
          }`}
        >
          Calendar
        </li>
      </ul>

      {/* 📅 CALENDAR VIEW */}
      {activeView === "calendar" && (
        <div className="mt-4 space-y-2">
          {Object.keys(tasksByDate).map((date) => (
            <div
              key={date}
              onClick={() => setSelectedDate(date)}
              className="flex justify-between text-sm p-2 rounded cursor-pointer hover:bg-gray-100"
            >
              <span>{date}</span>
              <span className="text-gray-500">{tasksByDate[date]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
