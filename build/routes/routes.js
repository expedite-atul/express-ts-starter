"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchController_1 = require("../controller/searchController");
exports.default = [
    {
        path: "/api/v1/search/:id?",
        method: "get",
        handler: [
            async (req, res) => {
                const { id } = req.query;
                console.log(id);
                const result = await searchController_1.getPlaces(id);
                res.status(200).send(result);
            }
        ]
    }
];
//# sourceMappingURL=routes.js.map