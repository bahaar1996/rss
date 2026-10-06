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
      <NewItems items={items} />
      <main className="p-6">
        <FeedList items={items} />
      </main>
    </div>
  );
}
