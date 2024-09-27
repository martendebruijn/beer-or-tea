import { isWorkingDay, isFriday, isWeekend, type Drink } from "./types";

export function timeFor(date: Date): Drink {
  const day = date.getDay();
  const hours = date.getHours();

  const isWorkingDayAfter18 = isWorkingDay(day) && hours > 18;
  const isFridayAfter16 = isFriday(day) && hours >= 16;

  if (isWorkingDayAfter18 || isFridayAfter16 || isWeekend(day)) return "beer";

  return "tea";
}
