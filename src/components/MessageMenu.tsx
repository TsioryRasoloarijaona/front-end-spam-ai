import { MessageStructure } from "@/interfaces/dataTypes";
import { timeAgo } from "@/utils/converter";
import { stripHtmlTags } from "@/utils/stringUtils";

interface MessageMenuProps {
  body?: MessageStructure | null;
  type: "RECEIVED" | "SENT ";
}

export default function MessageMenu({ body, type }: MessageMenuProps) {
  let emailDisplay: React.ReactNode;
  if (type == "RECEIVED") {
    emailDisplay = (
      <div className="flex items-center -space-x-3">
        <div
          className="text-white font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center uppercase border-2 border-white text-xs"
          style={{
            backgroundColor: `hsl(${Math.floor(
              Math.random() * 360
            )}, 50%, 30%)`,
          }}
        >
          <p>{body?.messageSender.email[0]}</p>
        </div>
        <span className="ml-4 text-sm text-black font-medium">
          {body?.messageSender.email}
        </span>
      </div>
    );
  } else if (type == "SENT ") {
    emailDisplay = (
      <div className="flex items-center -space-x-3">
        {body?.receivers.map((receiver, idx) => (
          <div
            key={idx}
            className="text-white font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center uppercase border-2 border-white text-xs"
            style={{
              backgroundColor: `hsl(${Math.floor(
                Math.random() * 360
              )}, 50%, 30%)`,
              zIndex: body.receivers.length - idx,
            }}
          >
            <p>{receiver.email[0]}</p>
          </div>
        ))}
        <span className="ml-4 text-sm text-black font-medium">
            {body?.receivers.map((receiver) => receiver.email).join(" , ")}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-row space-x-4 h-fit overflow-hidden py-2 px-7">
      <div className="w-full">
        <div className="flex items-center justify-between">
          {emailDisplay}
          <span className="text-sm text-black font-medium">
            {body?.sendDateTime ? timeAgo(body?.sendDateTime) : ""}
          </span>
        </div>
        <p className="mb-2 text-sm font-bold ">obj : {body?.object}</p>
        <p className="truncate overflow-y-hidden text-ellipsis text-sm flex items-center justify-between">
          <span>content : {stripHtmlTags(body?.body ?? "")}</span>
        </p>
      </div>
    </div>
  );
}
