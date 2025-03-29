import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function BillPaymentRequests() {

    return (
        <div className="flex">
          <main className="flex-1 p-6 mt-4">
            <Navbar />
            <div className="mt-4"></div> 
    
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div >
                <Table />
               
    
            </div>
    
            
            </div>
          </main>
        </div>
      );
   
}