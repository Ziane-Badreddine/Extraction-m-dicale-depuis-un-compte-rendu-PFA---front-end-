import { create } from "zustand";

type SearchDialogState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useSearchDialog = create<SearchDialogState>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
