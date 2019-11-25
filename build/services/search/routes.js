"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SearchController_1 = require("./SearchController");
exports.default = [
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            async ({ query }, res) => {
                const result = await SearchController_1.getPlacesByName(query.q);
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map