import ContentPane from "@/app/content/ContentPane";

import ArtistAccount from "../account/ArtistAccount";
import MessageHistory from "../account/MessageHistory";
import NewMessage from "../account/NewMessage";
import ContentList from "../content/ContentList";
import ContentHomepage from "../content/Homepage";
import DiscoverMusic from "../library/DiscoverMusic";
import FeaturedSong from "../library/FeaturedSong";

interface ContentProps {
  currentPane: string;
  setCurrentPane: (pane: string) => void;
}

export default function Content({ currentPane, setCurrentPane }: ContentProps) {
  switch (currentPane) {
    case "content":
      return <ContentList setCurrentPane={setCurrentPane} />;
    case "featuredArticle":
      return <ContentPane />;
    case "library":
      return <DiscoverMusic setCurrentPane={setCurrentPane} />;
    case "featuredSong":
      return <FeaturedSong />;
    case "account":
      return <ArtistAccount setCurrentPane={setCurrentPane} />;
    case "newMessage":
      return <NewMessage />;
    case "messageHistory":
      return <MessageHistory />;
    default:
      return <ContentHomepage />;
  }
}
