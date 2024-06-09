import Button from "../components/Button";

interface NewMessageProps {
  setSentText: (text: string) => void;
  setCurrentPane: (pane: string) => void;
}

export default function NewMessage({
  setSentText,
  setCurrentPane,
}: NewMessageProps) {
  return (
    <div className="mb-10 mt-6 flex h-full flex-col justify-between">
      <textarea
        className="h-[300px] w-[347px] resize-none border border-black px-[10px] py-4 text-xs"
        onChange={(e) => setSentText(e.target.value)}
      />
      <div className="mt-6 flex justify-between sm:mt-10">
        <Button
          label="Add song"
          onClick={() => console.log("Add song")}
          extraClasses="w-[150px] px-3 py-2 text-sm"
          isDisabled
        />
        <Button
          label="Send text"
          onClick={() => {
            setCurrentPane("messageHistory");
          }}
          extraClasses="w-[150px] px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}
