"use client";

import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
  InboxOutlined,
  StarOutlined,
  PlusOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

const menuItems: MenuProps["items"] = [
  {
    key: "all",
    icon: <InboxOutlined />,
    label: (
      <div className="flex items-center justify-between">
        <span>All Items</span>
        <span className="text-xs text-zinc-400">24</span>
      </div>
    ),
  },
  {
    key: "saved",
    icon: <StarOutlined />,
    label: "Saved",
  },
  {
    type: "divider",
  },
  {
    key: "frontend",
    icon: <AppstoreOutlined />,
    label: "Frontend",
  },
  {
    key: "design",
    icon: <AppstoreOutlined />,
    label: "Design",
  },
  {
    key: "ai",
    icon: <AppstoreOutlined />,
    label: "AI & ML",
  },
];

export function AppSidebar() {
  return (
    <aside className="hidden h-[calc(100vh-56px)] w-[240px] shrink-0 border-r border-zinc-200 bg-white lg:block">
      <div className="flex h-full flex-col">
        {/* Main Menu */}
        <div className="flex-1 px-3 pt-4">
          <Menu
            mode="inline"
            selectedKeys={["all"]}
            items={menuItems}
            className="!border-none"
          />
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 p-3">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100">
            <PlusOutlined />
            <span>Add Feed</span>
          </button>

          <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100">
            <SettingOutlined />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
