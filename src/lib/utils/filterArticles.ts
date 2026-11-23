type SearchableArticle = {
  title?: string;
  contentSnippet?: string;
  content?: string;
  creator?: string;
};

export function filterArticles<T extends SearchableArticle>(
  articles: T[],
  query: string,
): T[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return articles;

  return articles.filter((article) => {
    const searchableText = [
      article.title,
      article.contentSnippet,
      article.content,
      article.creator,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
