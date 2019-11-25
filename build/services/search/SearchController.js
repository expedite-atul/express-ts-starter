"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OpenCageDataProvider_1 = require("./providers/OpenCageDataProvider");
exports.getPlacesByName = async (q) => {
    return await OpenCageDataProvider_1.getPlaces(q);
};
//# sourceMappingURL=SearchController.js.map