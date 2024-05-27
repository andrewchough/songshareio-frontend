import messageHistory from "@/test-data/message-history.json";

export default function MessageHistory() {
  return messageHistory.messages.map((message) => (
    <div
      className="mb-12 mt-6 flex h-full flex-col justify-between"
      key={message.date + message.header}
    >
      <div className="grid w-[334px] grid-cols-[1fr,3fr] items-center gap-x-4 border border-black px-3 py-1 text-xs">
        <h4 className="text-center font-bold">
          {message.status.toLocaleUpperCase()}
        </h4>
        <div>
          <h5 className="font-bold">Subject: {message.header}</h5>
          <p className="mt-2">
            <span className="font-bold">Date:&nbsp;</span>
            {message.date}
          </p>
        </div>
      </div>
    </div>
  ));
}
