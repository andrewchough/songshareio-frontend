/* eslint-disable @next/next/no-img-element */
import songsList from "@/test-data/music-library.json";

interface SongPaneProps {
  selectedSong: number | null;
}

export default function SongPane({ selectedSong }: SongPaneProps) {
  const index = selectedSong !== null && selectedSong ? selectedSong - 1 : 0;

  const song = songsList.songs[index];

  if (!song) {
    return <div>Song not found</div>;
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-center px-4">
      <div>
        {/* TO-ASK: What is the default image size for the images? */}
        <img
          src={song.imageUrl}
          className="h-[190px] w-[347px] object-cover"
          alt={`Image for ${song.title}`}
        />
      </div>
      <h1 className="mt-3 text-center text-xl font-bold">{song.title}</h1>
      <div className="mt-4 flex h-[110px] items-center overflow-y-auto border-x border-black px-4">
        <p className="px-4 text-xs">{song.description}</p>
      </div>
      <h4 className="mt-7 text-2xl font-medium tracking-widest">
        {song.genre}
      </h4>
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
