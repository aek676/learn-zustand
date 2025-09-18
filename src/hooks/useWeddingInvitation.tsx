import { useWeedingInvitationStore } from "../stores/weeding-inivitation/weeding-invitation.store";

export const useWeedingInvitation = () => {
    const firstName = useWeedingInvitationStore((state) => state.firstName);
    const lastName = useWeedingInvitationStore((state) => state.lastName);
    const guestNumber = useWeedingInvitationStore((state) => state.guestNumber);
    const isComing = useWeedingInvitationStore((state) => state.isComing);
    const eventTime = useWeedingInvitationStore((state) => state.eventTime);
    const eventDate = useWeedingInvitationStore((state) => state.eventDate);

    const addFirstName = useWeedingInvitationStore((state) => state.setFirstName);
    const addLastName = useWeedingInvitationStore((state) => state.setLastName);
    const addGuestNumber = useWeedingInvitationStore((state) => state.setGuestNumber);
    const addIsComing = useWeedingInvitationStore((state) => state.setIsComing);
    const addEventTime = useWeedingInvitationStore((state) => state.setEventTime);
    const addEventDate = useWeedingInvitationStore((state) => state.setEventDate);

    const handleOnChangeFirstName = (e: React.FormEvent<HTMLInputElement>) => {
        addFirstName(e.currentTarget.value);
    }

    const handleOnChangeLastName = (e: React.FormEvent<HTMLInputElement>) => {
        addLastName(e.currentTarget.value);
    }

    const handleOnChangeGuestNumber = (e: React.FormEvent<HTMLInputElement>) => {
        addGuestNumber(Number(e.currentTarget.value));
    }

    const handleOnChangeIsComing = (e: React.FormEvent<HTMLInputElement>) => {
        addIsComing(e.currentTarget.value as 'yes' | 'no');
    }

    const handleOnChangeEventTime = (e: React.FormEvent<HTMLInputElement>) => {
        addEventTime(e.currentTarget.value);
    }

    const handleOnChangeEventDate = (e: React.FormEvent<HTMLInputElement>) => {
        addEventDate(e.currentTarget.value);
    }

    return {
        firstName,
        lastName,
        guestNumber,
        isComing,
        eventTime,
        eventDate,

        handleOnChangeFirstName,
        handleOnChangeLastName,
        handleOnChangeGuestNumber,
        handleOnChangeIsComing,
        handleOnChangeEventTime,
        handleOnChangeEventDate,
    }
}