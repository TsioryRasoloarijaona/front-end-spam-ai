import { create } from "zustand";
import { UserAccount } from "@/interfaces/UserAccount";

type action = {
  updateId: (id: UserAccount["peopleInfo"]["id"]) => void;
  updateEmail: (email: UserAccount["email"]) => void;
  updatePhone: (phoneNumer: UserAccount["phoneNumber"]) => void;
  updatePass: (password: UserAccount["password"]) => void;
};

const useAccountStore = create<UserAccount & action>((set) => ({
  peopleInfo: {
    id: "",
  },
  phoneNumber: "",
  email: "",
  password: "",
  updateId: (id) => set(() => ({ peopleInfo: { id } })),
  updateEmail: (email) => set(() => ({ email })),
  updatePhone: (phoneNumber) => set(() => ({ phoneNumber })),
  updatePass: (password) => set(() => ({ password })),
}));

export default useAccountStore;
