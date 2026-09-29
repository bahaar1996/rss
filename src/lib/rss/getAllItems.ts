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
  return items
    .map((item) => ({
      title: item.title ?? "",
      link: item.link ?? "",
      guid: item.guid ?? item.link ?? "",
      creator: item.creator ?? "",
      pubDate: item.pubDate ?? "",
      isoDate: item.isoDate ?? "",
      contentSnippet: item.contentSnippet ?? "",
      categories: item.categories ?? [],
    }))
    .sort(
      (a, b) =>
        new Date(b.isoDate ?? 0).getTime() - new Date(a.isoDate ?? 0).getTime(),
    );
}
