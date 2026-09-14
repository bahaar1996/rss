import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="px-2 min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
