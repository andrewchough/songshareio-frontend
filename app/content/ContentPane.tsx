/* eslint-disable @next/next/no-img-element */
import contentData from "@/test-data/content-management.json";

import Button from "../components/Button";

interface ContentPaneProps {
  selectedArticle?: number | null;
}

export default function ContentPane({ selectedArticle }: ContentPaneProps) {
  const index =
    selectedArticle !== null && selectedArticle ? selectedArticle - 1 : 0;

  const article = contentData.articles[index];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center px-4">
      <div>
        <img
          src={article.imageUrl}
          className="h-[190px] w-[347px] object-cover"
          alt={`Image for ${article.title}`}
        />
      </div>
      <h1 className="mt-3 text-center text-xl font-bold">{article.title}</h1>
      <div className="mt-4 flex h-[110px] items-center overflow-y-auto border-x border-black px-4">
        <p className="px-4 text-xs">{article.description}</p>
      </div>
      <h4 className="mt-7 text-2xl font-medium tracking-widest">
        {article.genre}
      </h4>
      <div className="mt-8 flex w-full items-center justify-between px-6">
        <Button
          label="Subscribe"
          onClick={() => console.log("Subscribe")}
          extraClasses="w-[124px] py-[10px]"
        />
        <Button
          label="Share"
          onClick={() => console.log("Share")}
          extraClasses="w-[124px] py-[10px]"
        />
      </div>
      <div className="mt-6 flex items-center justify-between gap-x-2 rounded-[28px] border border-black bg-[#C9DEF7] px-4 py-1">
        <button>
          <img src="/logos/play.svg" alt="Play Icon" />
        </button>
        <img src="/logos/sound-wave.svg" alt="Sound wave" />
        <img src="/logos/heart.svg" alt="Heart" />
      </div>
    </div>
  );
}
