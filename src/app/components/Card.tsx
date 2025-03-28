interface CardProps {
    title: string;
    amount: string;
    dueDate: string;
    alertType: "warning" | "error";
  }
  
  export default function Card({ title, amount, dueDate, alertType }: CardProps) {
    // const alertColor = alertType === "warning" ? "text-yellow-600" : "text-red-600";
    return (
      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-gray-700 font-semibold">{title}</h2>
        <p className="text-lg font-bold text-gray-900">{amount}</p>
        <p className="text-sm text-gray-500">Due Date: {dueDate}</p>
        <div className="flex gap-2 mt-2">
          <button className="bg-gray-200 px-3 py-1 rounded">View Details</button>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Create Request</button>
        </div>
      </div>
    );
  }
  