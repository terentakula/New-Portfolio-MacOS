import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#constants/index.js";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = false;
        win.isMaximized = false;
        win.zIndex = INITIAL_Z_INDEX;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        state.windows[windowKey].zIndex = state.nextZIndex++;
      }),

    toggleMaximize: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (win) win.isMaximized = !win.isMaximized;
      }),
  }))
);

export default useWindowStore;

