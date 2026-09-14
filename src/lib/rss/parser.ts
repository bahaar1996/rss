import Parser from "rss-parser";

const parser = new Parser();

export async function getFeed(feedUrl: string) {
  const feed = await parser.parseURL(feedUrl);
  return feed;
}
