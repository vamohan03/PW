import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

    testMatch: ["tests/Login.test.ts"]
};

export default config;