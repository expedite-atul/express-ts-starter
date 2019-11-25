"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.checkSearchParams = (req, res, next) => {
    if (!req.query.postId) {
        throw new httpErrors_1.HTTP400Error("Missing postId");
    }
    else {
        next(); //@to handle next middleware
    }
};
//# sourceMappingURL=checks.js.map