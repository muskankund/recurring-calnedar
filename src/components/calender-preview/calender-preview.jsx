import React from "react";
import {
  format,
  addDays,
  addMonths,
  addYears,
  eachDayOfInterval,
  getDay,
} from "date-fns";
import parseNthDay from "@/utils/parseNthDay";

const CalendarPreview = ({ recurrence }) => {
  const { pattern, interval, startDate, endDate, specificDays, nthDay } =
    recurrence;

  const calculateDates = () => {
    if (!startDate) return [];

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : addDays(start, 365);

    const dates = [];

    if (pattern === "daily") {
      const allDates = eachDayOfInterval({ start, end });
      return allDates.filter(
        (_, idx) => idx % interval === 0 && new Date(_) <= end
      );
    }

    if (pattern === "weekly") {
      const allDates = eachDayOfInterval({ start, end });
      return allDates.filter(
        (date) => specificDays.includes(getDay(date)) && new Date(date) <= end
      );
    }

    if (pattern === "monthly") {
      if (nthDay) {
        const results = [];
        for (
          let date = new Date(start);
          date <= end;
          date = new Date(date.setMonth(date.getMonth() + interval))
        ) {
          const parsedDate = parseNthDay(
            nthDay,
            date.getMonth(),
            date.getFullYear()
          );
          if (parsedDate && parsedDate <= end) results.push(parsedDate);
        }
        return results;
      }

      let currentDate = new Date(start);
      while (currentDate <= end) {
        dates.push(currentDate);
        currentDate = addMonths(currentDate, interval);
      }
      return dates;
    }

    if (pattern === "yearly") {
      let currentDate = new Date(start);
      while (currentDate <= end) {
        dates.push(currentDate);
        currentDate = addYears(currentDate, interval);
      }
      return dates;
    }

    return dates;
  };

  const dates = calculateDates();

  return (
    <div>
      <h3 className="font-bold mb-2 text-black">Recurring Dates</h3>
      <div className="grid grid-cols-7 gap-2">
        {!!dates?.length &&
          dates.map((date, idx) => (
            <div key={idx} className="p-2 text-center bg-gray-500 rounded">
              {format(date, "dd/MM/yyyy")}
            </div>
          ))}
        {!dates?.length && (
          <h4 className="font-medium mb-2 text-black">No Data Found</h4>
        )}
      </div>
    </div>
  );
};

export default CalendarPreview;
