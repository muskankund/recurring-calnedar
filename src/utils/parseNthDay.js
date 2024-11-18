const parseNthDay = (nthDay, month, year) => {
    const [ordinal, weekday] = nthDay.split(" ");
    const weekDaysMap = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
  
    const ordinalsMap = {
      First: 1,
      Second: 2,
      Third: 3,
      Fourth: 4,
      Fifth: 5,
      Last: -1,
    };
  
    const weekdayIndex = weekDaysMap[weekday];
    const ordinalIndex = ordinalsMap[ordinal];
  
    if (weekdayIndex === undefined || ordinalIndex === undefined) {
      return null;
    }
  
    const monthDates = eachDayOfInterval({
      start: new Date(year, month, 1),
      end: new Date(year, month + 1, 0),
    });
  
    const filteredDates = monthDates.filter(
      (date) => getDay(date) === weekdayIndex
    );
  
    if (ordinalIndex === -1) {
      return filteredDates[filteredDates.length - 1];
    }
  
    return filteredDates[ordinalIndex - 1] || null;
  };

  export default parseNthDay