import { getFeed } from "./parser";
import feedsData from "@/data/sample-feeds.json";

export async function getAllItems() {
  const feeds = feedsData.categories.flatMap((category) => category.feeds);
  const results = await Promise.allSettled(
    feeds.map((feed) => getFeed(feed.feedUrl)),
  );
  const successfulFeeds = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  const items = successfulFeeds.flatMap((feed) => feed.items);
  return items.sort(
    (a, b) =>
      new Date(b.isoDate ?? 0).getTime() - new Date(a.isoDate ?? 0).getTime(),
  );
}
