import { create, StateCreator } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface PersonState {
    firstName: string;
    lastName: string;

    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
}

const storeApi: StateCreator<PersonState, [["zustand/devtools", never], ["zustand/persist", unknown]]> = (set) => ({
    firstName: '',
    lastName: '',

    setFirstName: (firstName: string) => set(() => ({ firstName }), false, 'setFirstName'),
    setLastName: (lastName: string) => set(() => ({ lastName }), false, 'setLastName'),
})

export const usePersonStore = create<PersonState>()(
    devtools(
        persist(
            storeApi,
            {
                name: 'person-storage',
                // storage: customFirebaseStorage
            }
        )
    )
);