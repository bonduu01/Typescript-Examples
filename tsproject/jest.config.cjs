module.exports = {
    preset: "ts-jest/presets/default-esm",
    testEnvironment: "node",

    extensionsToTreatAsEsm: [".ts"],

    testMatch: ["**/tests/**/*.test.ts"],

    transform: {
        "^.+\\.ts$": [
            "ts-jest",
            {
                useESM: true,
                tsconfig: {
                    module: "ESNext",
                    moduleResolution: "node"
                }
            }
        ]
    }
};