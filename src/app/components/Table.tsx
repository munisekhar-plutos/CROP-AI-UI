const billRequests = [
    { amount: "123,000", employees: 124, bills: 247, status: "Pending" },
    { amount: "68,000", employees: 73, bills: 162, status: "Settled" },
    { amount: "98,000", employees: 68, bills: 123, status: "Settled" },
    { amount: "87,000", employees: 68, bills: 137, status: "Declined" },
  ];
  
  export default function Table() {
    return (
        <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-gray-900 font-bold text-lg">Bill Payment Requests</h2>
              <p className="text-gray-500 text-sm">Subtitle goes here</p>
            </div>
            <button className="bg-blue-100 text-gray-700 px-4 py-1 rounded-md text-sm hover:bg-gray-200">
              View All
            </button>
          </div>
      
          {/* Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className=" border-b border-gray-300 text-gray-700 text-sm">
                  <th className="p-3 text-left font-semibold border-r border-gray-300">Amount</th>
                  <th className="p-3 text-left font-semibold border-r border-gray-300">No. of Employees</th>
                  <th className="p-3 text-left font-semibold border-r border-gray-300">No. of Bills</th>
                  <th className="p-3 text-left font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {billRequests?.length > 0 ? (
                  billRequests.map((request, index) => (
                    <tr key={index} className="border-b border-gray-300 text-gray-700 text-sm">
                      <td className="p-3 border-r border-gray-300">₹{request.amount.toLocaleString()}</td>
                      <td className="p-3 border-r border-gray-300">{request.employees}</td>
                      <td className="p-3 border-r border-gray-300">{request.bills}</td>
                      <td
                        className={`p-3 font-medium ${
                          request.status === "Pending"
                            ? "text-yellow-500"
                            : request.status === "Declined"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {request.status}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    {/* <td colSpan="4" className="p-4 text-center text-gray-500">
                      No bill requests found.
                    </td> */}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
      
      
  }
  