import email from "../interfaces/EmailInterface";
interface props {
    content : email
}

export default function MessageView({content} : props ) {
  return (
    <div className=" w-full p-7 space-y-11">
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="bg-[rgb(136,211,211)] text-white font-bold w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <p>TR</p>
          </div>
          <div className="text-sm">
            <p>john carter</p>
            <p className="font-bold">{content?.email}</p>
          </div>
        </div>
        <div>
          <p className="text-sm">{content?.dateTime}</p>
        </div>
      </div>
      <div className="font-bold ">{content?.object}</div>
      <div>
        <div className="">{content?.content}</div>
      </div>
      <div>document1.pdf</div>
    </div>
  );
  
}
