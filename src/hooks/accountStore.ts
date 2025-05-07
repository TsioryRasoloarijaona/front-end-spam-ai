import {create} from 'zustand';
import { UserAccount } from '@/interfaces/UserAccount';

type action = {
    setId : (id: UserAccount["peopleInfo"]["id"]) => void
    setEmail: (email: UserAccount["email"]) => void
    setPhoneNumber: (phoneNumer : UserAccount["phoneNumber"]) => void
    setPassword: (password : UserAccount["password"]) => void
}

const useAccountStore = create<UserAccount & action>((set) => ({
    peopleInfo: {
        id: "",
    },
    phoneNumber: "",
    email: "",
    password: "",
    setId: (id) => set(() => ({ peopleInfo: { id } })),
    setEmail: (email) => set(() => ({ email })),
    setPhoneNumber: (phoneNumber) => set(() => ({ phoneNumber })),
    setPassword: (password) => set(() => ({ password }))
    
}))

export default useAccountStore;