import { StateCreator } from "zustand";
import { InvitationFirstName } from "../types";

export const createFirstNameSlice: StateCreator<InvitationFirstName, [["zustand/devtools", never]]> = (set) => ({
    firstName: '',
    setFirstName: (firstName: string) => {
        set(() => ({ firstName }), false, 'setFirstName');
    }
});