/* eslint-disable @next/next/no-img-element */

interface LoginProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export default function Login({ setIsLoggedIn }: LoginProps) {
  return (
    <div className="flex h-screen w-[375px] flex-col items-center justify-center gap-y-4 bg-white px-4">
      <img
        src="/logos/songshare-logo.svg"
        alt="Songshare Icon"
        width={200}
        height={24}
      />
      <input
        onChange={(e) => {
          if (e.target.value === "123456789") {
            setIsLoggedIn(true);
          }
        }}
        type="tel"
        placeholder="Enter your phone number"
        className="w-full rounded-[28px] border border-black p-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
        maxLength={9}
      />
    </div>
  );
}
