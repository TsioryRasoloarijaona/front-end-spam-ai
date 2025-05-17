import { create } from "zustand";

interface PageStore {
  totalPage: number;
  currentPage: number;
  setTotalPage: (total: number) => void;
  setCurrentPage: (page: number) => void;
  updatePages: (total: number, current: number) => void;
}

export const usePageStore = create<PageStore>((set) => ({
  totalPage: 0,
  currentPage: 1,
  setTotalPage: (total) => set({ totalPage: total }),
  setCurrentPage: (page) => set({ currentPage: page }),
  updatePages: (total, current) => set({ totalPage: total, currentPage: current }),
}));
