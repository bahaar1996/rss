"use client";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

const NewItems = ({ items }) => {
  const [lastVisit, setLastVisit] = useState<string | null>(null);
  const firstNewItemRef = useRef<null>(null);
  const handleViewNewItem = () => {
    firstNewItemRef.current?.scrollIntoView({
      behavior: "smooth",
      // block: "start",
    });
  };
  useEffect(() => {
    const savedLastVisit = localStorage.getItem("feed-last-visit");
    setLastVisit(savedLastVisit);

    localStorage.setItem("feed-last-visit", new Date().toISOString());
  }, []);
  const newItems = items.filter((item) => {
    if (!item.isoDate || !lastVisit) return false;
    return new Date(item.pubDate) > new Date(lastVisit);
  });

  console.log("newItems", newItems.length);
  return (
    <div className="w-full bg-blue-100! text-blue-600 flex justify-center items-center py-2 my-1">
      <div>
        <ArrowUpOutlined className="mr-2" />
        {newItems.length} new {newItems.length === 1 ? "item" : "items"} since
        your last visit
      </div>
    </div>
  );
};

export default NewItems;
