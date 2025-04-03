import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { MessageToSend } from "@/interfaces/dataTypes";

export function connectWebSocket(
  onMessageReceived: (message: MessageToSend) => void,
  token: string
) {
  const SOCKET_URL = "http://localhost:8080/ws";
  const socket = new SockJS(`${SOCKET_URL}?token=${token}`);
  const stompClient = Stomp.over(socket);

  console.log("📌 Script démarré...");

  stompClient.connect({ Authorization: `Bearer ${token}` }, (frame) => {
    console.log("✅ Connecté au WebSocket STOMP :", frame);
    stompClient?.subscribe(`/user/queue/messages`, (message) => {
      console.log("📩 Message reçu :", JSON.parse(message.body));
      onMessageReceived(JSON.parse(message.body));
    });
  });
}
