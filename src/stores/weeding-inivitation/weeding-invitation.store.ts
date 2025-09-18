import { create } from "zustand";
import { createEventDateSlice } from "./stores/eventDate.store";
import { createEventTimeSlice } from "./stores/eventTime.store";
import { createFirstNameSlice } from "./stores/firstName.store";
import { createGuestNumberSlice } from "./stores/guestNumber.store";
import { createIsComingSlice } from "./stores/isComing.store";
import { createLastNameSlice } from "./stores/lastName.store";
import { InvitationEventDate, InvitationEventTime, InvitationFirstName, InvitationGuestNumber, InvitationIsComing, InvitationLastName } from "./types";
import { devtools, persist } from "zustand/middleware";

type Invitation = InvitationFirstName & InvitationLastName & InvitationGuestNumber & InvitationIsComing & InvitationEventTime & InvitationEventDate;

export const useWeedingInvitationStore = create<Invitation>()(
    devtools(
        persist(
            (...a) => ({
                ...createFirstNameSlice(...a),
                ...createLastNameSlice(...a),
                ...createGuestNumberSlice(...a),
                ...createIsComingSlice(...a),
                ...createEventTimeSlice(...a),
                ...createEventDateSlice(...a),
            }),
            { name: 'weeding-invitation-storage' }
        )
    )
)