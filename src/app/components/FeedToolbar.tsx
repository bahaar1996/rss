"use client";
import {
  AppstoreOutlined,
  FilterOutlined,
  MenuOutlined,
  ReloadOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const FeedToolbar = ({ handleMarkAllRead }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  // function handleRefreshing() {
  //   setIsRefreshing(true);
  //   try {
  //     router.refresh();
  //   } catch (error) {
  //     setIsRefreshing(false);
  //     throw error;
  //   } finally {
  //     setIsRefreshing(false);
  //   }
  // }
  const handleRefreshing = () => {
    startTransition(() => {
      router.refresh();
    });
  };
  return (
    <div className="flex justify-between px-4 py-6 border-b border-zinc-200">
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

          <Button
            onClick={handleRefreshing}
            icon={<ReloadOutlined />}
            loading={isPending}
          >
            Refresh
          </Button>

          <Button onClick={handleMarkAllRead}>Mark all read</Button>
        </div>
      </div>
    </div>
  );
};

export default FeedToolbar;
