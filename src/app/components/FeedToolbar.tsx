"use client";
import {
  AppstoreOutlined,
  FilterOutlined,
  MenuOutlined,
  ReloadOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const FeedToolbar = () => {
  return (
    <div className="flex justify-between mt-1">
      <div className="flex gap-2">
        <span className="font-bold">All Items</span>
        <span className="text-zinc-400">47 unread</span>
      </div>
      {/* //// */}
      <div className="flex gap-2">
        <div className="flex rounded-lg border border-zinc-200">
          <Button
            type="text"
            className="border-r! border-zinc-200! rounded-r-none!"
            icon={<MenuOutlined />}
          />
          <Button
            type="text"
            className="rounded-none! border-l! border-zinc-200!"
            icon={<AppstoreOutlined />}
          />
          <Button
            type="text"
            className="rounded-l-none! rounded-r-lg! border-l! border-zinc-200!"
            icon={<UnorderedListOutlined />}
          />
        </div>
        <div className="flex gap-2">
          <Button icon={<FilterOutlined />}>Newest</Button>

          <Button icon={<ReloadOutlined />}>Refresh</Button>

          <Button>Mark all read</Button>
        </div>
      </div>
    </div>
  );
};

export default FeedToolbar;
