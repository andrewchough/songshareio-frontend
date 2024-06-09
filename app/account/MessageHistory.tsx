import messageHistory from "@/test-data/message-history.json";

interface MessageHistoryProps {
  sentText: string;
}

export default function MessageHistory({ sentText }: MessageHistoryProps) {
  return (
    <>
      <div
        className="mb-12 mt-6 flex h-full flex-col justify-between"
        key={sentText}
      >
        <div className="grid w-[334px] grid-cols-[1fr,3fr] items-center gap-x-4 border border-black px-3 py-1 text-xs">
          <h4 className="text-center font-bold">SENT</h4>
          <div>
            <h5 className="font-bold">Subject: {sentText}</h5>
            <p className="mt-2">
              <span className="font-bold">Date:&nbsp;</span>
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      {messageHistory.messages.map((message) => (
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
      ))}
    </>
  );
}
