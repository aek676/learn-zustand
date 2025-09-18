import { StateCreator } from "zustand";
import { InvitationEventTime } from "../types";

export const createEventTimeSlice: StateCreator<InvitationEventTime, [["zustand/devtools", never]]> = (set) => ({
    eventTime: '',
    setEventTime: (eventTime: string) => set(() => ({ eventTime }), false, 'setEventTime'),
});