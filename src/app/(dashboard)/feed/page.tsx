import FeedContent from "@/app/components/FeedContent";
import { getAllItems } from "@/lib/rss/getAllItems";
import { getFeed } from "@/lib/rss/parser";

export default async function FeedPage() {
  const feed = await getFeed("https://css-tricks.com/feed/");
  const items = await getAllItems();
  console.log("item page", items);
  return (
    <div>
      <FeedContent items={items} />
    </div>
  );
}
