"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = (middlewareWrappers, // @toUncomment when any middleware is called before routes
router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        router[method](path, handler);
    }
};
//# sourceMappingURL=index.js.map