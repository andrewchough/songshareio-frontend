interface MenuProps {
  setCurrentPane: (pane: string) => void;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function Menu({ setCurrentPane, setIsMenuOpen }: MenuProps) {
  return (
    <div className="bg-white">
      <div className="flex h-[70vh] w-[339px] justify-center rounded-[28px] border border-black bg-[#C9DEF7] px-11 py-9 sm:h-[75vh]">
        <div className="flex flex-col justify-between gap-y-0">
          <button
            className="flex h-[54px] items-center justify-center rounded-[28px] border border-black bg-[#82B4ED] py-3 text-2xl font-medium text-white"
            onClick={() => {
              setCurrentPane("account");
              setIsMenuOpen(false);
            }}
          >
            my account
          </button>
          <button
            className="flex h-[54px] items-center justify-center rounded-[28px] border border-black bg-[#82B4ED] py-3 text-2xl font-medium text-white"
            onClick={() => {
              setCurrentPane("content");
              setIsMenuOpen(false);
            }}
          >
            discover weekly
          </button>
          <button
            className="flex h-[54px] items-center justify-center rounded-[28px] border border-black bg-[#82B4ED] px-11 py-3 text-2xl font-medium text-white"
            onClick={() => {
              setCurrentPane("library");
              setIsMenuOpen(false);
            }}
          >
            music library
          </button>
          <button
            className="flex h-[54px] cursor-not-allowed items-center justify-center rounded-[28px] border border-black bg-[#82B4ED] px-11 py-3 text-2xl font-medium text-white opacity-30"
            onClick={() => {
              setCurrentPane("events");
              setIsMenuOpen(false);
            }}
            disabled
          >
            events
          </button>
          <button
            className="flex h-[54px] cursor-not-allowed items-center justify-center rounded-[28px] border border-black bg-[#82B4ED] px-11 py-3 text-2xl font-medium text-white opacity-30"
            onClick={() => {
              setCurrentPane("invite-friend");
              setIsMenuOpen(false);
            }}
            disabled
          >
            invite a friend
          </button>
        </div>
      </div>
    </div>
  );
}
