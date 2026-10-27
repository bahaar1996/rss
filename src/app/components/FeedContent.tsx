"use client";

import FeedList from "@/app/components/FeedList";
import FeedToolbar from "@/app/components/FeedToolbar";
import NewItems from "@/app/components/NewItems";
import { useEffect, useState } from "react";

const FeedContent = ({ items }) => {
  const [readItems, setReadItems] = useState<string[]>([]);

  useEffect(() => {
    const read = JSON.parse(localStorage.getItem("readItem") || "[]");
    setReadItems(read);
  }, []);
  console.log("ReadItems", readItems);
  const handleMarkAllRead = () => {
    const allIds = items.map((item) => item.guid);
    setReadItems((prev) => {
      const updated = [...new Set([...prev, ...allIds])];
      localStorage.setItem("readItem", JSON.stringify(updated));
      return updated;
    });
  };
  return (
    <div>
      <FeedToolbar handleMarkAllRead={handleMarkAllRead} />
      <NewItems items={items} />
      <main className="p-6">
        <FeedList items={items} readItems={readItems} />
      </main>
    </div>
  );
};

export default FeedContent;
