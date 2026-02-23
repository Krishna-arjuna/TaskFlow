import { ShoppingCart, Users, DollarSign } from "lucide-react";
function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-2">{value}</h3>
      </div>
      <div className="text-purple-600">
        {icon}
      </div>
    </div>
  );
}

export default StatCard;
