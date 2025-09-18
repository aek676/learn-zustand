import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl = 'https://zustand-storage-5eaaf-default-rtdb.europe-west1.firebasedatabase.app/zustand';

const storageApiFirebase: StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
        const data = await fetch(`${firebaseUrl}/${name}.json`)
            .then(res => res.json())
            .catch(err => { throw err });

        return JSON.stringify(data);
    },
    setItem: async function (name: string, value: string): Promise<void> {
        await fetch(`${firebaseUrl}/${name}.json`, {
            method: 'PUT',
            body: value
        })
            .then(res => res.json())
            .catch(err => { throw err });
        return;
    },
    removeItem: async function (name: string): Promise<void> {
        await fetch(`${firebaseUrl}/${name}.json`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .catch(err => { throw err });
        return;
    }
}

export const customFirebaseStorage = createJSONStorage(() => storageApiFirebase);