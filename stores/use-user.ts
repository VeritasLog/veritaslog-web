"use client";

import { IRoleStore } from "@/types";
import { create } from "zustand";

export const useUserStore = create<IRoleStore>((set) => ({
  address: null,
  role: null,
  setAddress: (address) => set({ address }),
  setRole: (role) => set({ role }),
}));
