import SidebarNavigation from "@/app/components/SidebarNavigation";

import { getAllItems } from "@/lib/rss/getAllItems";

const Sidebar = async () => {
  const items = await getAllItems();
  return <SidebarNavigation items={items} />;
};

export default Sidebar;
