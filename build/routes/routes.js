"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchController_1 = require("../controller/searchController");
exports.default = [
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            async ({ query }, res) => {
                const result = await searchController_1.getPlaces(query.q);
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map