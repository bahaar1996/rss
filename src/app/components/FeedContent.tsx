"use client";

import FeedList from "@/app/components/FeedList";
import FeedToolbar from "@/app/components/FeedToolbar";
import NewItems from "@/app/components/NewItems";
import { filterArticles } from "@/lib/utils/filterArticles";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export enum ViewMode {
  listView = "listView",
  gridView = "gridView",
  compactListView = "compactListView",
}
const FeedContent = ({ items }) => {
  const [readItems, setReadItems] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState(ViewMode.listView);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") ?? "";
  const filteredItems = useMemo(() => {
    return filterArticles(items, searchQuery);
  }, [items, searchQuery]);
  useEffect(() => {
    const read = JSON.parse(localStorage.getItem("readItem") || "[]");
    setReadItems(read);
  }, []);

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
      <FeedToolbar
        handleMarkAllRead={handleMarkAllRead}
        sortBy={sortBy}
        onSortChange={setSortBy}
        viewMode={viewMode}
        viewModeChange={setViewMode}
      />
      <NewItems items={items} />
      <main className="p-6">
        <FeedList
          items={filteredItems}
          readItems={readItems}
          sortBy={sortBy}
          viewMode={viewMode}
        />
      </main>
    </div>
  );
};

export default FeedContent;
