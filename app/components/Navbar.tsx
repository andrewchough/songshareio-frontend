/* eslint-disable @next/next/no-img-element */
"use client";

interface NavbarProps {
  isMenuOpen: boolean;
  onMenuClick: (isMenuOpen: boolean) => void;
  setCurrentPane: (pane: string) => void;
}

export default function Navbar({
  isMenuOpen,
  onMenuClick,
  setCurrentPane,
}: NavbarProps) {
  return (
    <nav className="flex w-full items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <img
          src="/logos/songshare-logo.svg"
          alt="Songshare Icon"
          width={100}
          height={24}
          onClick={() => {
            setCurrentPane("");
            onMenuClick(false);
          }}
          className="cursor-pointer"
        />
      </div>
      {isMenuOpen && (
        <img
          src="/logos/close.svg"
          alt="Close icon"
          width={24}
          height={24}
          onClick={() => onMenuClick(false)}
          className="cursor-pointer"
        />
      )}
    </nav>
  );
}
