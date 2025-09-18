export interface InvitationFirstName {
    firstName: string;

    setFirstName: (firstName: string) => void;
}

export interface InvitationLastName {
    lastName: string;

    setLastName: (lastName: string) => void;
}

export interface InvitationGuestNumber {
    guestNumber: number;

    setGuestNumber: (guestNumber: number) => void;
}

export interface InvitationEventDate {
    eventDate: string;

    setEventDate: (eventDate: string) => void;
}

export interface InvitationEventTime {
    eventTime: string;

    setEventTime: (eventTime: string) => void;
}

export interface InvitationIsComing {
    isComing: 'yes' | 'no';

    setIsComing: (isComing: 'yes' | 'no') => void;
}