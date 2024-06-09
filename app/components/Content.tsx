import { useState } from "react";

import ContentPane from "@/app/content/ContentPane";

import ArtistAccount from "../account/ArtistAccount";
import MessageHistory from "../account/MessageHistory";
import NewMessage from "../account/NewMessage";
import ContentList from "../content/ContentList";
import ContentHomepage from "../content/Homepage";
import DiscoverMusic from "../library/DiscoverMusic";
import SongPane from "../library/SongPane";

interface ContentProps {
  currentPane: string;
  setCurrentPane: (pane: string) => void;
}

export default function Content({ currentPane, setCurrentPane }: ContentProps) {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [selectedSong, setSelectedSong] = useState<number | null>(null);
  const [sentText, setSentText] = useState<string>("");

  switch (currentPane) {
    case "content":
      return (
        <ContentList
          setCurrentPane={setCurrentPane}
          setSelectedArticle={setSelectedArticle}
        />
      );
    case "article":
      return <ContentPane selectedArticle={selectedArticle} />;
    case "library":
      return (
        <DiscoverMusic
          setCurrentPane={setCurrentPane}
          setSelectedSong={setSelectedSong}
        />
      );
    case "songPane":
      return <SongPane selectedSong={selectedSong} />;
    case "account":
      return <ArtistAccount setCurrentPane={setCurrentPane} />;
    case "newMessage":
      return (
        <NewMessage setSentText={setSentText} setCurrentPane={setCurrentPane} />
      );
    case "messageHistory":
      return <MessageHistory sentText={sentText} />;
    default:
      return <ContentHomepage />;
  }
}
