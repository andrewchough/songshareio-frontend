/* eslint-disable @next/next/no-img-element */
import { classNames } from "@/lib/helpers";

import contentData from "@/test-data/content-management.json";

interface ContentListProps {
  setCurrentPane: (pane: string) => void;
  setSelectedArticle: (articleId: number) => void;
}

export default function ContentList({
  setCurrentPane,
  setSelectedArticle,
}: ContentListProps) {
  return contentData.articles.map((article) =>
    article.id === 1 ? (
      <div
        key={article.id}
        className="mt-6 flex cursor-pointer items-start justify-center gap-x-4 px-4"
        onClick={() => {
          setCurrentPane("article");
          setSelectedArticle(article.id);
        }}
      >
        <img
          src={article.imageUrl}
          className="h-[198px] w-[137px] rounded-[28px] object-cover"
          alt={`Image of ${article.title}`}
        />
        <div className="text-left text-xs">
          <h1 className="mt-3 font-bold">{article.title}</h1>
          <h4 className="my-3 font-medium">{article.genre}</h4>
          <p>{article.description}</p>
        </div>
      </div>
    ) : (
      <div
        key={article.id}
        className={classNames(
          `mt-6 flex w-full cursor-pointer gap-x-4 px-4`,
          article.id === contentData.articles.length ? `mb-6` : "",
        )}
        onClick={() => {
          setCurrentPane("article");
          setSelectedArticle(article.id);
        }}
      >
        <img
          src={article.imageUrl}
          className="h-[100px] w-[100px] rounded-[28px] object-cover"
          alt={`Image of ${article.title}`}
        />
        <div className="text-xs">
          <h1 className="mt-3 font-bold">{article.title}</h1>
          <h4 className="mt-3 font-medium">{article.genre}</h4>
        </div>
      </div>
    ),
  );
}
