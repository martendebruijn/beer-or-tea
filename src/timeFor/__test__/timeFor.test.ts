import { expect, test, describe } from "vitest";
import { timeFor } from "../timeFor";

describe("timeFor", () => {
  test("should return beer when given a working day after 18:00", () => {
    const monday = new Date("2021-08-02T19:00:00");
    const tuesday = new Date("2021-08-03T19:00:00");
    const wednesday = new Date("2021-08-04T19:00:00");
    const thursday = new Date("2021-08-05T19:00:00");
    const friday = new Date("2021-08-06T19:00:00");

    const result = "beer";

    expect(timeFor(monday)).toBe(result);
    expect(timeFor(tuesday)).toBe(result);
    expect(timeFor(wednesday)).toBe(result);
    expect(timeFor(thursday)).toBe(result);
    expect(timeFor(friday)).toBe(result);
  });

  test("should return beer when it's friday after or equal to 16:00", () => {
    const four = new Date("2021-08-06T16:00:00");
    const five = new Date("2021-08-06T17:00:00");
    const six = new Date("2021-08-06T18:00:00");

    const result = "beer";

    expect(timeFor(four)).toBe(result);
    expect(timeFor(five)).toBe(result);
    expect(timeFor(six)).toBe(result);
  });

  test("should return beer when it's the weekend", () => {
    const saturday = new Date("2021-08-07T12:00:00");
    const sunday = new Date("2021-08-08T12:00:00");

    const result = "beer";

    expect(timeFor(saturday)).toBe(result);
    expect(timeFor(sunday)).toBe(result);
  });

  test("should return tea when given a working day before 18:00", () => {
    const monday = new Date("2021-08-02T12:00:00");
    const tuesday = new Date("2021-08-03T12:00:00");
    const wednesday = new Date("2021-08-04T12:00:00");
    const thursday = new Date("2021-08-05T12:00:00");
    const friday = new Date("2021-08-06T12:00:00");

    const result = "tea";

    expect(timeFor(monday)).toBe(result);
    expect(timeFor(tuesday)).toBe(result);
    expect(timeFor(wednesday)).toBe(result);
    expect(timeFor(thursday)).toBe(result);
    expect(timeFor(friday)).toBe(result);
  });

  test("should return tea when it's friday before 16:00", () => {
    const three = new Date("2021-08-06T15:00:00");
    const two = new Date("2021-08-06T14:00:00");
    const eight = new Date("2021-08-06T08:00:00");

    const result = "tea";

    expect(timeFor(three)).toBe(result);
    expect(timeFor(two)).toBe(result);
    expect(timeFor(eight)).toBe(result);
  });
});
