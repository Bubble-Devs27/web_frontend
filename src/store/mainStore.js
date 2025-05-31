import { create } from 'zustand'
import { persist } from 'zustand/middleware';
export const useStore = create((set) => ({
  user: null,
  baseURL : 'http://192.168.29.36:5000',
  // Actions
  
}))

export const useCart = create(
  persist(
    (set, get) => ({
      fullWash: 0,
      ExteriorWash: 0,
      smallWash: 0,
      preferedTime: {},
      preferedDate: {},
      address: {},
      price: 0,
      isLogin :false,
      logOut : () =>set({isLogin : false}),
      logIn : () =>set({isLogin : true}),
      addTime: (time) => set({ preferedTime: time }),
      addDate: (date) => set({ preferedDate: date }),
      addAddress: (address) => set({ address: address }),
      setPrice: (price) => set({ price: price }),

      addFullWash: () => set({ fullWash: get().fullWash + 1 }),
      addExteriorWash: () => set({ ExteriorWash: get().ExteriorWash + 1 }),
      decFullWash: () => set({ fullWash: get().fullWash - 1 }),
      decExteriorWash: () => set({ ExteriorWash: get().ExteriorWash - 1 }),
      addsmallWash: () => set({ smallWash: get().smallWash + 1 }),
      decSmallWash: () => set({ smallWash: get().smallWash - 1 }),
      resetStore: () =>
    set({
      fullWash: 0,
      ExteriorWash: 0,
      smallWash: 0,
      preferedTime: {},
      preferedDate: {},
      address: {},
      price: 0,
    }),
    }),
    {
      name: 'cart-storage', // name of item in localStorage
      getStorage: () => localStorage, // (optional) default
    }
  )
);

export const useUserDetails = create(
  persist(
    (set, get) => ({
      details: {},
      setDetails: (detail) => set({ details :detail }),
    }),
    {
      name: 'user-details-storage', // name of the item in localStorage
      getStorage: () => localStorage, // optional, can be customized
    }
  )
);