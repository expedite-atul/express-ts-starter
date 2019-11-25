"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const Provider = __importStar(require("./OpenCageDataProvider"));
jest.mock("request-promise");
describe("OpenCageDataProvider", () => {
    test("an empty query string", async () => {
        request_promise_1.default.mockImplementation(() => '{"features": []}');
        const result = await Provider.getPlaces("Chamonix");
        expect(result).toEqual({ features: [] });
    });
    test("an invalid non-json response", async () => {
        request_promise_1.default.mockImplementation(() => "Service Unavailable.");
        expect(Provider.getPlaces("Chamonix")).rejects.toThrow(SyntaxError);
    });
});
//# sourceMappingURL=OpenCageDataProvider.test.js.map