import Navbar from "../components/Navbar";
import Table from "../components/Table";


export default function Overview() {
  return (
    <div className="flex">

      <main className="flex-1 mt-4   p-6">

        <Navbar />
        <div className="mt-4 mt-4"></div> 

      
        {/* <BillCategories /> */}
        <div className="grid grid-cols-3 gap-6 mt-6">
        
            <Table />
          </div>

      </main>
    </div>
  );
}
