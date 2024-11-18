"use client";
import { CalendarPreview, DatePickcer, RecurrenceOptions } from "@/components";
import { useDatePickerStore } from "@/zustand/DatePickerStore";
import React from "react";

const Home = () => {
  const { recurrence, setRecurrence } = useDatePickerStore();

  const getNextDay = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className={""}>
      <RecurrenceOptions />

      {recurrence.pattern !== "none" && (
        <>
          <DatePickcer
            label="Start Date"
            value={recurrence.startDate}
            onChange={(e) => setRecurrence({ startDate: e.target.value })}
          />

          <DatePickcer
            label="End Date"
            value={recurrence.endDate}
            onChange={(e) => setRecurrence({ endDate: e.target.value })}
            disabled={!recurrence.startDate}
            min={getNextDay(recurrence.startDate)|| ""}
          />
        </>
      )}
      {recurrence.startDate && <CalendarPreview recurrence={recurrence} />}
    </div>
  );
};

export default Home;
