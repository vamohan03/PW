import type { PlaywrightTestConfig } from "@playwright/test";
import { clear } from "console";

const config: PlaywrightTestConfig = {

    testMatch: ["tests/basicinteraction.test.ts"],
    use: {
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure"
    },
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/Json"
    }], ["html", {
        open: "always"
    }]]
};

export default config;