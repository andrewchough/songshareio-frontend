import Button from "../components/Button";

export default function NewMessage() {
  return (
    <div className="mb-10 mt-6 flex h-full flex-col justify-between">
      <textarea className="h-[300px] w-[347px] resize-none border border-black px-[10px] py-4 text-xs" />
      <div className="mt-6 flex justify-between sm:mt-10">
        <Button
          label="Add song"
          onClick={() => console.log("Add song")}
          extraClasses="w-[150px] px-3 py-2 text-sm"
        />
        <Button
          label="Send text"
          onClick={() => console.log("Send text")}
          extraClasses="w-[150px] px-3 py-2 text-sm"
        />
      </div>
    </div>
  );
}
