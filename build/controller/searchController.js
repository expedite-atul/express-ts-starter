"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.getPlaces = async (query) => {
    const key = 1;
    const url = `https://jsonplaceholder.typicode.com/comments?${query}&postId=${key}`;
    const response = await request_promise_1.default(url);
    console.log(response);
    return JSON.parse(response);
};
//# sourceMappingURL=searchController.js.map