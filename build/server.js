"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const index_1 = require("./utils/index");
const middleware_1 = __importDefault(require("./middleware"));
const routes_1 = __importDefault(require("./routes"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});
process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
const router = express_1.default();
index_1.applyMiddleware(middleware_1.default, router);
index_1.applyRoutes(routes_1.default, router);
index_1.applyMiddleware(errorHandlers_1.default, router);
const { PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => console.log(`Server is running find docs at -- http://localhost:${PORT}/api-docs`));
//# sourceMappingURL=server.js.map