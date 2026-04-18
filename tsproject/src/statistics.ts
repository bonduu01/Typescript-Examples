export class StatisticsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "StatisticsError";
    }
}
export class Statistics {
    private numbers: number[];
    constructor(nums: number[]) {
        if (nums.length === 0) throw new StatisticsError("Empty number list");
        if (nums.some(n => !isFinite(n))) throw new StatisticsError("Non-finite number");
        this.numbers = nums;
    }
    mean(): number {
        return this.numbers.reduce((sum, n) => sum + n, 0) / this.numbers.length;
    }
    max(): number {
        return Math.max(...this.numbers);
    }
}