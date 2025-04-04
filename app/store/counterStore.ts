import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface CountState {
    count:number;
    increment : () => void
    decrement: () => void;
    reset :() => void;
}

const useCountStore = create<CountState>()(
    persist(
        (set) => ({
        count:0,
        increment: () => set((state) => ({count:state.count+1})),
        decrement : () => set((state) => {
            return ({count:state.count > 0 ? state.count -1 :0})
        }),
        reset:()=>set(({count:0}))
    }),{
        name:"counter-storage"
    })
);

export default useCountStore;