function Header() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-800">
        Project Dashboard
      </h2>

      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition">
        New Project
      </button>
    </div>
  );
}

export default Header;
