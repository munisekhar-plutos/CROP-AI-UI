import Image from "next/image";

export default function Billcategories() {
    return (
      <div className="p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Enabled Bill Categories</h2>
            <p className="text-gray-500 text-sm">Subtitle goes here</p>
          </div>
          <button className="px-4 py-2 text-blue-600 bg-blue-100 rounded-md">
            View All
          </button>
        </div>
        <div className="flex gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border rounded-lg  bg-gray-50 w-24"
            >
              <Image
                src="https://storage.googleapis.com/bbps-prod-b01/bbps/service_icon/image1705930551071.svg" 
                alt="Electricity"
                className="w-8 h-8 mb-2"
              />
              <p className="text-sm font-medium">Electricity</p>
              <p className="text-xs text-gray-500">12%</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  