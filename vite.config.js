import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
var legacyFuncionalidadesPattern = /^\/funcionalidades\/.+/;
/** 301 em dev/preview para URLs legadas /funcionalidades/* */
function legacyFuncionalidadesRedirect() {
    var middleware = function (req, res, next) {
        var _a, _b;
        var url = (_b = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split('?')[0]) !== null && _b !== void 0 ? _b : '';
        if (legacyFuncionalidadesPattern.test(url)) {
            res.statusCode = 301;
            res.setHeader('Location', '/funcionalidades');
            res.end();
            return;
        }
        next();
    };
    return {
        name: 'legacy-funcionalidades-redirect',
        configureServer: function (server) {
            server.middlewares.use(middleware);
        },
        configurePreviewServer: function (server) {
            server.middlewares.use(middleware);
        },
    };
}
export default defineConfig({
    plugins: [react(), tsconfigPaths(), legacyFuncionalidadesRedirect()],
});
