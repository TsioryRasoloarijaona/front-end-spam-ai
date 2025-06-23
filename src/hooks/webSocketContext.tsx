import React, { createContext, useState, useContext, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { MessageStructure } from "@/interfaces/dataTypes";

interface WebSocketContextType {
  messages: MessageStructure[];
  sentMessages: MessageStructure[];
  spamMessages : MessageStructure[] ;
  connectWebSocket: (token: string) => void;
  disconnectWebSocket: () => void;
}
const BASE_URL = process.env.SOCKET_URL;

const WebSocketContext = createContext<WebSocketContextType | undefined>(
  undefined
);

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error(
      "useWebSocket doit être utilisé à l'intérieur d'un WebSocketProvider"
    );
  }
  return context;
};

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<MessageStructure[]>([]);
  const [sentMessages, setSentMessages] = useState<MessageStructure[]>([]);
  const [spamMessages, setSpamMessages] = useState<MessageStructure[]>([]);
   // Ajout de l'état pour les messages envoyés
  const stompClientRef = useRef<Stomp.Client | null>(null);

  const connectWebSocket = (token: string) => {
    if (stompClientRef.current) {
      console.warn("⚠️ WebSocket déjà connecté !");
      return;
    }

    const socket = new SockJS(`${BASE_URL}?token=${token}`);
    const stompClient = Stomp.over(socket);
    stompClientRef.current = stompClient;

    stompClient.connect(
      { Authorization: `Bearer ${token}` },
      () => {
        console.log("✅ WebSocket connecté !");

        stompClient.subscribe("/user/queue/messages", (message) => {
          const newMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [newMessage, ...prevMessages]);
          console.log("📩 Message reçu :", newMessage);
        });

        stompClient.subscribe("/user/queue/sent", (message) => {
          const sentMessage: MessageStructure = JSON.parse(message.body);
          setSentMessages((prev) => [sentMessage, ...prev]);
          console.log("✉️ Sent message reçu :", sentMessage);
        });
        stompClient.subscribe("/user/queue/spam", (message) => {
          const spamMessages: MessageStructure = JSON.parse(message.body);
          setSpamMessages((prev) => [spamMessages, ...prev]);
          console.log("✉️ Sent message reçu :", spamMessages);
        });
      },
      (error) => {
        console.error("❌ Erreur WebSocket :", error);
      }
    );
  };

  const disconnectWebSocket = () => {
    if (stompClientRef.current) {
      stompClientRef.current.disconnect(() => {
        console.log("🔌 WebSocket déconnecté");
      });
      stompClientRef.current = null;
    }
  };

  return (
    <WebSocketContext.Provider
      value={{
        messages,
        sentMessages,
        spamMessages , 
        connectWebSocket,
        disconnectWebSocket,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};
