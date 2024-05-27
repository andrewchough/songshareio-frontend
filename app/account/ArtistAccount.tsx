import Button from "../components/Button";

interface ArtistAccountProps {
  setCurrentPane: (pane: string) => void;
}

export default function ArtistAccount({ setCurrentPane }: ArtistAccountProps) {
  return (
    <div className="mt-6">
      <div className="h-[300px] w-[347px] rounded-[28px] border border-black bg-[#C9DEF7]" />
      <h1 className="mt-4 w-full text-center text-xl font-bold">
        Connect with your fans
      </h1>
      <div className="mt-4 flex justify-evenly border border-[#E5E5E5] p-4">
        <div className="text-center font-bold">
          <h4>00</h4>
          <h5>CITIES</h5>
        </div>
        <div className="text-center font-bold">
          <h4>00</h4>
          <h5>MESSAGES</h5>
        </div>
        <div className="text-center font-bold">
          <h4>00</h4>
          <h5>FANS</h5>
        </div>
      </div>
      <div className="mt-6 flex justify-between sm:mt-10">
        <Button
          label="Create new message"
          onClick={() => setCurrentPane("newMessage")}
          extraClasses="w-[150px] px-3 py-2 text-sm"
        />
        <Button
          label="Message history"
          onClick={() => setCurrentPane("messageHistory")}
          extraClasses="w-[150px] px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}
