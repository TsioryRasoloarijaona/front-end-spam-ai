
import { MessageToSend } from "@/interfaces/dataTypes";
import { formatDateTime } from "@/utils/converter";


export default function MessageView({content} : {content : MessageToSend} ) {
  return (
    <div className=" w-full p-7 space-y-11">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="bg-[rgb(236,236,240)] text-black font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center uppercase">
            <p>{`${content.accountDTO?.peopleInfoDTO?.firstName[0]}${content.accountDTO?.peopleInfoDTO?.lastName[0]}`}</p>
          </div>
          <div className="text-sm">
            <p>{`${content.accountDTO?.peopleInfoDTO?.firstName} ${content.accountDTO?.peopleInfoDTO?.lastName}`}</p>
            <p className="font-bold">{content?.accountDTO?.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm">{formatDateTime(content?.sendDateTime)}</p>
        </div>
      </div>
      <div className="font-bold ">{content?.object}</div>
      <div>
        <div className="leading-8 text-base">{content?.body}</div>
      </div>
      <div>document1.pdf</div>
    </div>
  );
  
}
