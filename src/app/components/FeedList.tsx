"use client";
const FeedList = ({ items }) => {
  return (
    <div className="space-y-4">
      {items?.map((item) => (
        <article
          key={item.guid ?? item.link}
          className="rounded-lg border border-zinc-200 bg-white p-5"
        >
          {/* Title */}
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-zinc-900 hover:text-blue-600"
          >
            {item.title}
          </a>

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
      ))}
    </div>
  );
};

export default FeedList;
