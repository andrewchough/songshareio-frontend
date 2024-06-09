import { classNames } from "@/lib/helpers";
import Account from "@/public/logos/account";
import Articles from "@/public/logos/articles";
import HamburgerMenu from "@/public/logos/hamburger-menu";
import Home from "@/public/logos/home";
import MusicLibrary from "@/public/logos/music-library";

interface FooterProps {
  setCurrentPane: (pane: string) => void;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  currentPane: string;
  isMenuOpen: boolean;
}

export default function Footer({
  setCurrentPane,
  setIsMenuOpen,
  currentPane,
  isMenuOpen,
}: FooterProps) {
  return (
    <div className="h-[10vh] w-full bg-white">
      <div className="flex h-full w-full justify-between text-sm">
        <button
          className={classNames(
            `flex flex-col items-center justify-center gap-y-1 p-2`,
            currentPane === "" && !isMenuOpen ? "bg-blue-200" : "bg-white",
          )}
          onClick={() => {
            setCurrentPane("");
            setIsMenuOpen(false);
          }}
        >
          <Home />
          Home
        </button>
        <button
          className={classNames(
            `flex flex-col items-center justify-center gap-y-1 p-2`,
            currentPane === "content" && !isMenuOpen
              ? "bg-blue-200"
              : "bg-white",
          )}
          onClick={() => {
            setCurrentPane("content");
            setIsMenuOpen(false);
          }}
        >
          <Articles />
          Articles
        </button>
        <button
          className={classNames(
            `flex flex-col items-center justify-center gap-y-1 p-2`,
            currentPane === "library" && !isMenuOpen
              ? "bg-blue-200"
              : "bg-white",
          )}
          onClick={() => {
            setCurrentPane("library");
            setIsMenuOpen(false);
          }}
        >
          <MusicLibrary />
          Library
        </button>
        <button
          className={classNames(
            `flex flex-col items-center justify-center gap-y-1 p-2`,
            isMenuOpen ? "bg-blue-200" : "bg-white",
          )}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <HamburgerMenu />
          Explore
        </button>
        <button
          className={classNames(
            `flex flex-col items-center justify-center gap-y-1 px-2 py-2`,
            currentPane === "account" && !isMenuOpen
              ? "bg-blue-200"
              : "bg-white",
          )}
          onClick={() => {
            setCurrentPane("account");
            setIsMenuOpen(false);
          }}
        >
          <Account />
          Account
        </button>
      </div>
    </div>
  );
}
