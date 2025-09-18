import { StateCreator } from "zustand";
import { InvitationEventDate } from "../types";

export const createEventDateSlice: StateCreator<InvitationEventDate, [["zustand/devtools", never]]> = (set) => ({
    eventDate: '',
    setEventDate: (eventDate: string) => set(() => ({ eventDate }), false, 'setEventDate'),
});