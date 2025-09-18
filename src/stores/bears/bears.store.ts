import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Bear {
    id: number;
    name: string;
    type: 'black' | 'polar' | 'panda';
}

interface BearState {
    blackBears: number;
    polarBears: number;
    pandaBears: number;

    bears: Bear[]

    totalBears: () => number;

    increaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;

    addBear: () => void;
    clearBears: () => void;
}

export const useBearStore = create<BearState>()(
    persist(
        (set, get) => ({
            blackBears: 10,
            polarBears: 5,
            pandaBears: 1,

            bears: [{ id: 1, name: "Oso Negro", type: "black" },
            { id: 2, name: "Oso Polar", type: "polar" },
            { id: 3, name: "Oso Panda", type: "panda" }],

            totalBears: () => {
                return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
            },

            increaseBlackBears: (by) =>
                set((state) => ({ blackBears: state.blackBears + by })),
            increasePolarBears: (by) =>
                set((state) => ({ polarBears: state.polarBears + by })),
            increasePandaBears: (by) =>
                set((state) => ({ pandaBears: state.pandaBears + by })),

            addBear: () => set(state => ({
                bears: [...state.bears, { id: state.bears.length + 1, name: `Oso ${state.bears.length + 1}`, type: 'black' }]
            })),
            clearBears: () => set({ bears: [] })
        }),
        { name: 'bear-storage' }
    )
)