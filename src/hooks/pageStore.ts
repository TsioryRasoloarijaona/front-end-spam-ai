import { create } from "zustand";

interface PageStore {
  totalPage: number;
  currentPage: number;
  setTotalPage : (page : number)=> void ,
  incrementPage: () => void;
  decrementPage: () => void;
}

export const usePageStore = create<PageStore>((set) => ({
  totalPage: 0,
  currentPage: 1,
  setTotalPage: (page: number) =>
    set(() => ({
      totalPage: page,
    })),
  incrementPage: () =>
    set((state) => ({
      currentPage: state.currentPage + 1,
    })),
  decrementPage: () =>
    set((state) => ({
      currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
    })),
}));
