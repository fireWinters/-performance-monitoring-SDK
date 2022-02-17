import * as analyticsTracker from "./analyticsTracker"
// @ponicode
describe("analyticsTracker.default", () => {
    test("0", () => {
        analyticsTracker.default({ metricName: "test_jaccard", data: 256, eventProperties: {}, navigatorInformation: { deviceMemory: 0.0, hardwareConcurrency: 1, isLowEndDevice: false, isLowEndExperience: undefined, serviceWorkerStatus: "unsupported" }, vitalsScore: "needsImprovement" })
    })
})
