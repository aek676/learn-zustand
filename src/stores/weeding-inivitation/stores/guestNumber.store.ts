import { StateCreator } from "zustand";
import { InvitationGuestNumber } from "../types";

export const createGuestNumberSlice: StateCreator<InvitationGuestNumber, [["zustand/devtools", never]]> = (set) => ({
    guestNumber: 0,
    setGuestNumber: (guestNumber: number) => set(() => ({ guestNumber }), false, 'setGuestNumber'),
});