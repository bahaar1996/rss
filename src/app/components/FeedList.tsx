"use client";

import { ViewMode } from "@/app/components/FeedContent";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
const FeedList = ({ items, readItems, sortBy, viewMode }) => {
  const [savedItems, setSavedItems] = useState<string[]>([]);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedItem") || "[]");
    setSavedItems(saved);
  }, []);
  const handleToggleSave = (guid: string) => {
    setSavedItems((prev) => {
      if (prev.includes(guid)) {
        const prevItems = prev.filter((id) => id !== guid);
        localStorage.setItem("savedItem", `${prevItems}`);
        return prevItems;
      }
      localStorage.setItem("savedItem", `${JSON.stringify([...prev, guid])}`);
      return [...prev, guid];
    });
  };
  const sortedItems = items.toSorted((a, b) => {
    const dateA = new Date(a.isoDate).getTime();
    const dateB = new Date(b.isoDate).getTime();

    if (sortBy === "newest") {
      return dateB - dateA;
    } else if (sortBy === "oldest") {
      return dateA - dateB;
    } else {
      return 0;
    }
  });
  console.log("my view", viewMode);
  return (
    <div
      className={`${viewMode === ViewMode.gridView ? "flex flex-wrap justify-between" : "block"} space-y-4`}
    >
      {sortedItems?.map((item) => {
        const isSaved = savedItems.includes(item.guid);
        const isRead = readItems.includes(item.guid);
        return (
          <article
            key={item.guid ?? item.link}
            className={`${viewMode === ViewMode.gridView ? "w-70 min-h-70" : "max-w-300"} border border-zinc-200 rounded-lg bg-white p-5 `}
          >
            {/* Title */}
            <div className="flex gap-2">
              {viewMode === ViewMode.compactListView && <span>•</span>}
              <button
                type="button"
                onClick={() => handleToggleSave(item.guid ?? "")}
              >
                {isSaved ? (
                  <StarFilled style={{ color: "green" }} />
                ) : (
                  <StarOutlined />
                )}
              </button>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg  ${isRead ? "font-normal text-zinc-500" : "font-semibold text-zinc-900"} hover:text-blue-600`}
              >
                {item.title}
              </a>
            </div>
            {/* Meta */}
            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
              {item.creator && (
                <>
                  <span>{item.creator}</span>
                  <span>•</span>
                </>
              )}

              {item.isoDate && (
                <time dateTime={item.isoDate}>
                  {new Date(item.isoDate).toLocaleDateString("en-US")}
                </time>
              )}
            </div>

            {/* Description */}
            {item.contentSnippet && (
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-600">
                {item.contentSnippet}
              </p>
            )}

            {/* Categories */}
            {item.categories && item.categories.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
};

export default FeedList;
