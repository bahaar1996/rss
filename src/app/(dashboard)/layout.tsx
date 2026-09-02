import Header from "@/app/components/Header";
import { AppSidebar } from "@/app/components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="px-2 min-h-screen">
      <Header />
      <AppSidebar />
    </div>
  );
};

export default DashboardLayout;
