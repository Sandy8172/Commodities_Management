import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme:
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light",

  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
      }
      return { theme: newTheme };
    }),

  setTheme: (t) =>
    set(() => {
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", t === "dark");
        localStorage.setItem("theme", t);
      }
      return { theme: t };
    }),
}));

export default useThemeStore;
