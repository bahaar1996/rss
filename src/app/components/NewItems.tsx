"use client";

import { ArrowUpOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

type Item = {
  guid?: string;
  title?: string;
  isoDate?: string;
};

type NewItemsProps = {
  items: Item[];
};

const NewItems = ({ items }: NewItemsProps) => {
  const [newItemsCount, setNewItemsCount] = useState(0);

  const hasChecked = useRef(false);

  useEffect(() => {
    if (hasChecked.current) {
      return;
    }

    hasChecked.current = true;

    const savedLastVisit = localStorage.getItem("feed-last-visit");

    console.log("previous visit:", savedLastVisit);

    if (!savedLastVisit) {
      localStorage.setItem("feed-last-visit", new Date().toISOString());

      setNewItemsCount(0);

      return;
    }

    const newItems = items.filter((item) => {
      if (!item.isoDate) {
        return false;
      }

      const itemDate = new Date(item.isoDate).getTime();
      const lastVisitDate = new Date(savedLastVisit).getTime();

      return itemDate > lastVisitDate;
    });

    console.log("previous visit:", savedLastVisit);
    console.log("new items:", newItems);
    console.log("new items count:", newItems.length);

    setNewItemsCount(newItems.length);

    localStorage.setItem("feed-last-visit", new Date().toISOString());
  }, [items]);

  return (
    <div className="w-full bg-blue-100 text-blue-600 flex justify-center items-center py-2 my-1">
      <div>
        <ArrowUpOutlined className="mr-2" />
        {newItemsCount} new {newItemsCount === 1 ? "item" : "items"} since your
        last visit
      </div>
    </div>
  );
};

export default NewItems;
