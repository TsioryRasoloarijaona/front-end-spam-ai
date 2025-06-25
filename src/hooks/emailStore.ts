import { MessageStructure } from "@/interfaces/dataTypes";
import { create } from "zustand";

interface emailStore {
  mails: { [page: number]: MessageStructure[] };
  addMail: (page: number, newMail: MessageStructure[]) => void;
}

const useMailStore = create<emailStore>((set) => ({
  mails: {},
  addMail: (page, newMail) =>
    set((state) => ({
      mails: {
        ...state.mails,
        [page]: newMail,
      },
    })),
}));

export default useMailStore;
