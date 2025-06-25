import { create } from "zustand";

interface EmailAddressState {
    email: string;
    setEmail: (email: string) => void;
    clearEmail: () => void;
}

export const useEmailAddressStore = create<EmailAddressState>((set) => ({
    email: '',
    setEmail: (email) => set({ email }),
    clearEmail: () => set({ email: '' }),
}));