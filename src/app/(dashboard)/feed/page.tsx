import FeedList from "@/app/components/FeedList";
import FeedToolbar from "@/app/components/FeedToolbar";
import NewItems from "@/app/components/NewItems";
import { getAllItems } from "@/lib/rss/getAllItems";
import { getFeed } from "@/lib/rss/parser";

export default async function FeedPage() {
  const feed = await getFeed("https://css-tricks.com/feed/");
  const items = await getAllItems();
  console.log("item page", items);
  return (
    <div>
      <FeedToolbar />
      <NewItems items={feed.items} />
      <main className="p-6">
        <div className="mb-8 flex items-center gap-3">
          {feed.image?.url && (
            <img
              src={feed.image.url}
              alt={feed.title ?? "Feed"}
              className="size-10 rounded-md"
            />
          )}
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">
              {feed.title}
            </h1>

            {feed.description && (
              <p className="text-sm text-zinc-500">{feed.description}</p>
            )}
          </div>
        </div>

        {/* Articles */}
        <FeedList feed={feed} />
      </main>
    </div>
  );
}
