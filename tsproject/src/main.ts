import { Statistics, StatisticsError } from "./statistics";
try {
    const stats = new Statistics([1.5, 2.5, 3.5]);
    console.log(`Mean: ${stats.mean()}`);
    console.log(`Max: ${stats.max()}`);
} catch (e) {
    console.error(`Error: ${(e as StatisticsError).message}`);
}