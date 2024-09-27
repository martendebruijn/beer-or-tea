export type Drink = "beer" | "tea";

export enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export type WorkingDay =
  | Days.Monday
  | Days.Tuesday
  | Days.Wednesday
  | Days.Thursday
  | Days.Friday;
export type Weekend = Days.Saturday | Days.Sunday;

export const isSunday = (day: Days): day is Days.Sunday => day === Days.Sunday;
export const isMonday = (day: Days): day is Days.Monday => day === Days.Monday;
export const isTuesday = (day: Days): day is Days.Tuesday =>
  day === Days.Tuesday;
export const isWednesday = (day: Days): day is Days.Wednesday =>
  day === Days.Wednesday;
export const isThursday = (day: Days): day is Days.Thursday =>
  day === Days.Thursday;
export const isFriday = (day: Days): day is Days.Friday => day === Days.Friday;
export const isSaturday = (day: Days): day is Days.Saturday =>
  day === Days.Saturday;

export const isWorkingDay = (day: Days): day is WorkingDay =>
  !isSaturday(day) || !isSunday(day);
export const isWeekend = (day: Days): day is Weekend =>
  isSaturday(day) || isSunday(day);
