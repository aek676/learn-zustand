import { StateCreator } from "zustand";
import { InvitationLastName } from "../types";

export const createLastNameSlice: StateCreator<InvitationLastName, [["zustand/devtools", never]]> = (set) => ({
    lastName: '',
    setLastName: (lastName: string) => set(() => ({ lastName }), false, 'setLastName'),
});