import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Table from "@/components/Table";
import BillPaids  from "@/components/BillPaid";
import BillDue from "@/components/Billdue";
import Groups from "@/components/Groups";
import Billcategories from "@/components/Bilcatagories";


export default function Home() {
  return (
    <div className="flex">

      <main className="flex-1 p-6">

        <Navbar />
        <div className="mt-4"></div> 

        <div className="grid grid-cols-3 gap-6 mt-6">
          <div >
            <Billcategories />
            <div className="mb-5"></div>
            <Groups />
          </div>
          <Chart />

          <div>
            <BillDue />
            <div className="mb-5"></div>
            <BillDue />
          </div>

        </div>

        {/* <BillCategories /> */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <BillPaids />
          <div className="col-span-2">
            <Table />
          </div>
        </div>
      </main>
    </div>
  );
}
