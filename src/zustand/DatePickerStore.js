import { create } from "zustand";

export const useDatePickerStore = create((set) => ({
  recurrence: {
    pattern: "daily", // Options: daily, weekly, monthly, yearly
    interval: 1, 
    specificDays: [], //[0,1,2,3,4,5,6] 0 for sunday
    nthDay: '', // For monthly recurrence (e.g., "second Tuesday")
    startDate: '', // Start date for the recurrence
    endDate: '', // Optional end date
  },
  setRecurrence: (newRecurrence) =>
    set((state) => ({ recurrence: { ...state.recurrence, ...newRecurrence } })),
}));
