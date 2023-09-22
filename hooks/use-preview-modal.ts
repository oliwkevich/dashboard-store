import { Product } from "@/types";
import { create } from "zustand";

interface UsePreviewModalProps {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

export const usePreviewModal = create<UsePreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
