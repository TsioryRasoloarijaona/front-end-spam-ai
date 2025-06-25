import { MessageStructure } from "@/interfaces/dataTypes";
import { create } from "zustand";

interface emailStore {
  sentMails: MessageStructure[] ;
  addMail: (newMail: MessageStructure[]) => void;
}

const useSentMailStore = create<emailStore>((set) => ({
  sentMails: [],
  addMail: (newMail) =>
    set((state) => ({
      sentMails: [...state.sentMails, ...newMail],
    })),
}));

export default useSentMailStore;
