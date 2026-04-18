import { Statistics, StatisticsError } from "../src/statistics";
describe("Statistics", () => {
    test("calculates mean correctly", () => {
        const stats = new Statistics([1, 2, 3]);
        expect(stats.mean()).toBe(2);
    });
    test("calculates max correctly", () => {
        const stats = new Statistics([1, 3, 2]);
        expect(stats.max()).toBe(3);
    });
    test("throws on empty list", () => {
        expect(() => new Statistics([])).toThrow(StatisticsError);
        expect(() => new Statistics([])).toThrow("Empty number list");
    });
    test("throws on non-finite numbers", () => {
        expect(() => new Statistics([1, Infinity])).toThrow(StatisticsError);
        expect(() => new Statistics([1, Infinity])).toThrow("Non-finite number");
    });
});