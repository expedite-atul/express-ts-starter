"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const utils_1 = require("../../utils");
const request_promise_1 = __importDefault(require("request-promise"));
const middleware_1 = __importDefault(require("../../middleware"));
const errorHandlers_1 = __importDefault(require("../../middleware/errorHandlers"));
const routes_1 = __importDefault(require("../../services/search/routes"));
jest.mock("request-promise");
request_promise_1.default.mockImplementation(() => '{"features": []}');
describe("routes", () => {
    let router;
    beforeEach(() => {
        router = express_1.default();
        utils_1.applyMiddleware(middleware_1.default, router);
        utils_1.applyRoutes(routes_1.default, router);
        utils_1.applyMiddleware(errorHandlers_1.default, router);
    });
    test("a valid string query", async () => {
        const response = await supertest_1.default(router).get("/api/v1/search?q=Cham");
        expect(response.status).toEqual(200);
    });
    test("a non-existing api method", async () => {
        const response = await supertest_1.default(router).get("/api/v11/search");
        expect(response.status).toEqual(404);
    });
    test("an empty string", async () => {
        const response = await supertest_1.default(router).get("/api/v1/search?q=");
        expect(response.status).toEqual(400);
    });
    test("a service is not available", async () => {
        request_promise_1.default.mockImplementation(() => "Service Unavailable.");
        const response = await supertest_1.default(router).get("/api/v1/search?q=Paris");
        expect(response.status).toEqual(503);
    });
});
//# sourceMappingURL=routes.test.js.map