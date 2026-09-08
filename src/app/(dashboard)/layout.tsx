import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="px-2 min-h-screen">
      <Header />
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
