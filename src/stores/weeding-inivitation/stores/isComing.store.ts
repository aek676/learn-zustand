import { StateCreator } from "zustand";
import { InvitationIsComing } from "../types";

export const createIsComingSlice: StateCreator<InvitationIsComing, [["zustand/devtools", never]]> = (set) => ({
    isComing: false,
    setIsComing: (isComing: boolean) => set(() => ({ isComing }), false, 'setIsComing'),
});