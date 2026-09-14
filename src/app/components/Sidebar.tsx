"use client";

import { BookOutlined, CheckCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import sampleFeedJson from "@/data/sample-feeds.json";

const categoryColors: Record<string, string> = {
  Frontend: "bg-blue-500",
  Design: "bg-pink-500",
  "Backend & DevOps": "bg-orange-500",
  "General Tech": "bg-indigo-500",
  "AI & ML": "bg-purple-500",
};

const feedColors: Record<string, string> = {
  "CSS-Tricks": "bg-red-500",
  "Smashing Magazine": "bg-red-600",
  "Josh W. Comeau": "bg-indigo-600",
  "Kent C. Dodds": "bg-blue-600",
  "web.dev": "bg-cyan-600",
  "MDN Blog": "bg-orange-500",

  "Sidebar.io": "bg-violet-500",
  "Nielsen Norman Group": "bg-emerald-600",
  "Figma Blog": "bg-zinc-800",
  "A List Apart": "bg-orange-600",
  "UX Collective": "bg-blue-600",

  "Cloudflare Blog": "bg-orange-500",
  "Vercel Blog": "bg-black",
  "The GitHub Blog": "bg-zinc-800",
  "Netlify Blog": "bg-teal-500",

  "The Pragmatic Engineer": "bg-indigo-500",
  "Hacker News Best": "bg-orange-500",

  "Simon Willison's Weblog": "bg-gray-800",
  "Hugging Face Blog": "bg-yellow-500",
};
const totalFeed = [
  {
    icon: "▤",
    name: "All Items",
    count: 47,
    href: "/feed",
    active: true,
  },
  {
    icon: "♡",
    name: "Saved",
    count: 12,
    href: "/saved",
    active: false,
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-20  h-[calc(100vh_-_3.5rem)] shrink-0 w-65 space-y-4 bg-zinc-50 p-4">
      <div className="border-b border-zinc-200">
        {totalFeed.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex justify-between rounded px-4 py-2 ${
              item.active
                ? "bg-blue-50 text-blue-600"
                : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
            }`}
          >
            <div className="flex gap-2">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>

            <span>{item.count}</span>
          </Link>
        ))}
      </div>

      {/* categories */}
      <section>
        <h2 className="font-[11px] text-zinc-400">CATEGORIES</h2>

        <div>
          {sampleFeedJson.categories.map((category) => (
            <div key={category.name}>
              <Link
                href={`/feed/${encodeURIComponent(category.name)}`}
                className="flex justify-between rounded py-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`block h-3 w-3 rounded-full text-white ${
                      categoryColors[category.name] ?? "bg-zinc-400"
                    }`}
                  />
                  <span>{category.name}</span>
                </div>

                <span className="text-zinc-400">{category.feeds.length}</span>
              </Link>

              {category.feeds.map((feed) => (
                <Link
                  key={feed.feedUrl}
                  href={`/feed/${encodeURIComponent(
                    category.name,
                  )}/${encodeURIComponent(feed.title)}`}
                  className="group flex h-7.25 items-center rounded-md px-3 pl-7 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                >
                  <span
                    className={`mr-3 flex size-3.5 shrink-0 items-center justify-center rounded-[3px] text-[9px] font-bold text-white ${
                      feedColors[feed.title] ?? "bg-zinc-400"
                    }`}
                  >
                    {feed.title.charAt(0)}
                  </span>

                  <span className="min-w-0 flex-1 truncate">{feed.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-zinc-200 pt-4">
        <CheckCircleOutlined className="mr-3 !text-emerald-500" />
        <span className="text-zinc-600">All feeds healty</span>
      </div>
    </div>
  );
};

export default Sidebar;
