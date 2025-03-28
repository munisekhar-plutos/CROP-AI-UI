export default function BillDue() {
    return (
      <div className="max-w-sm p-4 bg-white rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold">14% Bills Near Due</h2>
          <span className="text-yellow-500 text-lg">⚠</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md text-sm  ">
            <span className="text-gray-600">Amount</span>
            <span className="font-medium">&#8377; 76,43,465.45</span>
          </div>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md text-sm ">
            <span className="text-gray-600">Due Date</span>
            <span className="font-medium">24 Sept, 2024</span>
          </div>
        </div>
        <div className="mt-4 flex space-x-3">
          <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-200">
            View Details
          </button>
          <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Create Request
          </button>
        </div>
      </div>
    );
  }