import MessageView from "@/components/MessageView"
import email from "@/interfaces/EmailInterface"

export default function InboxView() {
  const mail : email = {
    email : 'john@smail.com' ,
    content : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero architecto earum dolor culpa atque cumque consequuntur consectetur eum fugiat nemo qui corrupti cum vitae doloribus saepe explicabo inventore, at iure.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique repellendus doloremque odit pariatur illo ea qui inventore, excepturi nostrum, tenetur deleniti velit soluta, commodi voluptas perspiciatis. Dolor nesciunt reprehenderit quasi.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloribus blanditiis iusto veniam ab ipsum animi laudantium possimus? Expedita laborum, ea molestias numquam quia asperiores dignissimos voluptate iusto itaque necessitatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat excepturi consequatur tenetur libero, et officiis esse perferendis rerum delectus similique recusandae! Libero, aliquid ipsam! Sit ipsum inventore corporis error a?` ,
    object : 'here is the object' ,
    dateTime : '2025-02-11 12:45'
  }
  return (
    <>
      <MessageView content={mail}/>
      
    </>
  )
}

