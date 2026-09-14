export type Feed = {
  title: string;
  feedUrl: string;
  siteUrl: string;
  description: string;
  format: "rss2" | "atom" | "unknown";
};

export type FeedCategory = {
  name: string;
  feeds: Feed[];
};

export type SampleFeed = {
  title: string;
  description: string;
  generated: string;
  categories: FeedCategory[];
};
