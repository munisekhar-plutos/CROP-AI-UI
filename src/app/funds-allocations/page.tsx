import Navbar from "@/components/Navbar";
import Chart from "@/components/Chart";

export default function Overview() {
  return (
    <div className="flex">

      <main className="flex-1 p-6 mt-4">

        <Navbar />
        <div className="mt-4"></div> 

        <div className="grid grid-cols-3 gap-6 mt-6">
         
          <Chart />

          
        </div>
      </main>
    </div>
  );
}
