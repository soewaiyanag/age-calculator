import { create } from "zustand";

export const useDayStore = create((set) => ({
  day: "",
  setDay: (day) => set(() => ({ day })),
}));

export const useMonthStore = create((set) => ({
  month: "",
  setMonth: (month) => set(() => ({ month })),
}));

export const useYearStore = create((set) => ({
  year: "",
  setYear: (year) => set(() => ({ year })),
}));

export const useAgeStore = create((set) => ({
  age: {
    year: null,
    month: null,
    day: null,
  },
  setAge: (year, month, day) => set(() => ({ age: { year, month, day } })),
}));
