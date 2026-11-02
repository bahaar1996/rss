"use client";
import {
  AppstoreOutlined,
  FilterOutlined,
  MenuOutlined,
  ReloadOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const FeedToolbar = ({ handleMarkAllRead, sortBy, onSortChange }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
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
          <Dropdown
            menu={{
              items: [
                { key: "newest", label: "Newest first" },
                { key: "oldest", label: "Oldest first" },
              ],
              onClick: ({ key }) => onSortChange(key),
            }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Button icon={<FilterOutlined />}>{sortBy}</Button>
          </Dropdown>

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
