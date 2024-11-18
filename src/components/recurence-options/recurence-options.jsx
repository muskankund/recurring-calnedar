import React from "react";
import { useDatePickerStore } from "@/zustand/DatePickerStore";

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useDatePickerStore();

  const handlePatternChange = (e) => {
    setRecurrence({ pattern: e.target.value });
  };

  const handleIntervalChange = (e) => {
    setRecurrence({ interval: parseInt(e.target.value, 10) });
  };

  const handleSpecificDaysChange = (day) => {
    const updatedDays = recurrence.specificDays.includes(day)
      ? recurrence.specificDays.filter((d) => d !== day)
      : [...recurrence.specificDays, day];
    setRecurrence({ specificDays: updatedDays });
  };

  const handleNthDayChange = (e) => {
    setRecurrence({ nthDay: e.target.value });
  };

  return (
    <div className="mb-4">
      <label className="block font-bold mb-2 text-black">
        Recurrence Pattern
      </label>
      <select
        value={recurrence.pattern}
        onChange={handlePatternChange}
        className="p-2 rounded bg-gray-500 w-full mb-2 outline-none"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      {recurrence.pattern === "daily" && (
        <>
          <label className="block font-bold mb-2 text-black">
            Every X Days
          </label>
          <input
            type="number"
            value={recurrence.interval || ""}
            onChange={handleIntervalChange}
            className="p-2 rounded bg-gray-500 w-full outline-none"
          />
        </>
      )}
      {recurrence.pattern === "weekly" && (
        <div className="mt-4">
          <label className="block font-bold mb-2 text-black">
            Days of the Week
          </label>
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSpecificDaysChange(idx)}
                  className={`p-2 rounded ${
                    recurrence.specificDays.includes(idx)
                      ? "bg-blue-500"
                      : "bg-gray-500"
                  }`}
                >
                  {day}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {recurrence.pattern === "monthly" && (
        <div className="mt-4">
          <label className="block font-bold mb-2 text-black">
            Nth Day of the Month
          </label>
          <input
            type="text"
            placeholder="e.g., Second Tuesday"
            value={recurrence.nthDay || ""}
            onChange={handleNthDayChange}
            className="p-2 rounded bg-gray-500 w-full outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
