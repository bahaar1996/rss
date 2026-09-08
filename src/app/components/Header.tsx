"use client";

import { Avatar, Button, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="flex justify-between border-b border-zinc-200 py-6">
      <div className="flex gap-6">
        <div className="flex gap-2">
          <div className="h-7 w-7 bg-blue-600 flex justify-center items-center rounded text-white font-bold">
            F
          </div>
          <span className="font-bold">FrontPage</span>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          <Button type="text">Feed</Button>
          <Button type="text">Digest</Button>
          <Button type="text">Discover</Button>
        </nav>
      </div>

      <div className="flex gap-2">
        <Input
          suffix={
            <span className="text-xs text-[#999] border border-[#d9d9d9] rounded px-1">
              /
            </span>
          }
          prefix={
            <SearchOutlined className="px-1" style={{ color: "#999999" }} />
          }
          placeholder="Search article..."
          className="md:flex w-64 rounded-3xl"
          styles={{
            root: {
              backgroundColor: "#f5f5f5",
              borderColor: "#d9d9d9",
            },
          }}
        />
        <Button
          shape="square"
          icon={<PlusOutlined />}
          style={{ padding: "15px" }}
        />
        <Avatar
          shape="circle"
          style={{ backgroundColor: "#6366F1", padding: "15px" }}
        >
          MS
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
