"use client";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useState } from "react";
const FeedList = ({ items }) => {
  const [savedItems, setSavedItems] = useState<string[]>([]);

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
  return (
    <div className="space-y-4">
      {items?.map((item) => {
        const isSaved = savedItems.includes(item.guid ?? "");
        return (
          <article
            key={item.guid ?? item.link}
            className="rounded-lg border border-zinc-200 bg-white p-5 max-w-300 w-full"
          >
            {/* Title */}
            <div className="flex gap-2">
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
                className="text-lg font-semibold text-zinc-900 hover:text-blue-600"
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
