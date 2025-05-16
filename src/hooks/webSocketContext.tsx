import React, { createContext, useState, useContext, useRef } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { MessageToSend } from "@/interfaces/dataTypes";
import { SentMessages } from "@/interfaces/SentMessages";

interface WebSocketContextType {
  messages: MessageToSend[];
  sentMessages: SentMessages[];
  sendMessage: (message: MessageToSend) => void;
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
  const [messages, setMessages] = useState<MessageToSend[]>([]);
  const [sentMessages, setSentMessages] = useState<SentMessages[]>([]); // Ajout de l'état pour les messages envoyés
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
          const sentMessage: SentMessages = JSON.parse(message.body);
          setSentMessages((prev) => [sentMessage, ...prev]); 
          console.log("✉️ Sent message reçu :", sentMessage);
        });
      },
      (error) => {
        console.error("❌ Erreur WebSocket :", error);
      }
    );
  };

  const sendMessage = (message: MessageToSend) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      stompClientRef.current.send(
        "/app/chat/private",
        {},
        JSON.stringify(message)
      );
      console.log("📤 Message envoyé :", message);
    } else {
      console.error("🚫 Impossible d'envoyer, WebSocket non connecté.");
    }
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
        sendMessage,
        connectWebSocket,
        disconnectWebSocket,
      }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};
