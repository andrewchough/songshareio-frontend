/* eslint-disable @next/next/no-img-element */
import { classNames } from "@/lib/helpers";

import contentData from "@/test-data/music-library.json";

interface DiscoverMusicProps {
  setCurrentPane: (pane: string) => void;
  setSelectedSong: (song: number) => void;
}

export default function DiscoverMusic({
  setCurrentPane,
  setSelectedSong,
}: DiscoverMusicProps) {
  return contentData.songs.map((song) =>
    song.id === 1 ? (
      <div
        key={song.id}
        className="mt-6 flex cursor-pointer items-start justify-center gap-x-4 px-4"
        onClick={() => {
          setCurrentPane("songPane");
          setSelectedSong(song.id);
        }}
      >
        <img
          src={song.imageUrl}
          className="h-[198px] w-[137px] rounded-[28px] object-cover"
          alt={`Image of ${song.title}`}
        />
        <div className="text-left text-xs">
          <h1 className="mt-3 font-bold">{song.title}</h1>
          <h4 className="my-3 font-medium">{song.genre}</h4>
          <p>{song.description}</p>
        </div>
      </div>
    ) : (
      <div
        key={song.id}
        className={classNames(
          `mt-6 flex w-full cursor-pointer gap-x-4 px-4`,
          song.id === contentData.songs.length ? `mb-6` : "",
        )}
        onClick={() => {
          setCurrentPane("songPane");
          setSelectedSong(song.id);
        }}
      >
        <img
          src={song.imageUrl}
          className="h-[100px] w-[100px] rounded-[28px] object-cover"
          alt={`Image of ${song.title}`}
        />
        <div className="text-xs">
          <h1 className="mt-3 font-bold">{song.title}</h1>
          <h4 className="mt-3 font-medium">{song.genre}</h4>
        </div>
      </div>
    ),
  );
}
