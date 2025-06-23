import { MessageStructure } from "@/interfaces/dataTypes";
import { formatDateTime } from "@/utils/converter";
import Translator from "./Translator";
import { stripHtmlTags } from "@/utils/stringUtils";
import React from "react";


interface MessageViewProps {
  content?: MessageStructure | null;
  type: "RECEIVED" | "SENT";
}

export default function MessageView({ content, type }: MessageViewProps) {
  let mailDisplay: React.ReactNode;
  let mailDescription: React.ReactNode;

  if (type == "RECEIVED") {
    mailDisplay = (
      <div className="flex items-center -space-x-3">
        <div
          className="text-white font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center uppercase border-2 border-white text-xs"
          style={{
            backgroundColor: `hsl(${Math.floor(
              Math.random() * 360
            )}, 50%, 30%)`,
          }}
        >
          <p>{content?.messageSender.email[0]}</p>
        </div>

        <span className="ml-4 text-sm font-semibold">
          {content?.messageSender.email}
        </span>
      </div>
    );
    mailDescription = (
      <div className="flex items-center -space-x-3">
        {content?.receivers.map((receiver, idx) => (
          <div
            key={idx}
            className="text-white font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center uppercase border-2 border-white text-xs"
            style={{
              backgroundColor: `hsl(${Math.floor(
                Math.random() * 360
              )}, 50%, 30%)`,
              zIndex: content.receivers.length - idx,
            }}
          >
            <p>{receiver.email[0]}</p>
          </div>
        ))}
        <span className="ml-4 text-sm font-semibold">
          to :{" "}
          {content?.receivers.map((receiver) => receiver.email).join(" , ")}
        </span>
      </div>
    );
  } else if (type == "SENT") {
    mailDisplay = (
      <div className="flex items-center -space-x-3">
        {content?.receivers.map((receiver, idx) => (
          <div
            key={idx}
            className="text-white font-bold w-[35px] h-[35px] rounded-full flex items-center justify-center uppercase border-2 border-white text-xs"
            style={{
              backgroundColor: `hsl(${Math.floor(
                Math.random() * 360
              )}, 50%, 30%)`,
              zIndex: content.receivers.length - idx,
            }}
          >
            <p>{receiver.email[0]}</p>
          </div>
        ))}
        <span className="ml-4 text-sm font-semibold">
          to :{" "}
          {content?.receivers.map((receiver) => receiver.email).join(" , ")}
        </span>
      </div>
    );
  }

  return (
    <div className=" w-full p-7 space-y-5">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-sm">object : {content?.object}</div>
        <Translator text={stripHtmlTags(content?.body ?? "")} />
      </div>
      <div className="flex items-center justify-between">
        {mailDisplay}
        <div>
          <p className="text-sm">
            {formatDateTime(content?.sendDateTime ?? "")}
          </p>
        </div>
      </div>
      <div className="text-sm">
        {mailDescription}
      </div>
      <div
        className="leading-6 text-sm"
        dangerouslySetInnerHTML={{ __html: content?.body ?? "" }}
      ></div>
    </div>
  );
}
