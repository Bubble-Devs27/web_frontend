// store/useWashStore.ts
import { create } from 'zustand'



const useWashStore = create((set) => ({
  order: {},
  setOrder: (value) => set({ order: value }),
}))

export default useWashStore
