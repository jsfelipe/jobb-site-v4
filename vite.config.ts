import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const legacyFuncionalidadesPattern = /^\/funcionalidades\/.+/;

/** 301 em dev/preview para URLs legadas /funcionalidades/* */
function legacyFuncionalidadesRedirect(): Plugin {
  const middleware = (
    req: { url?: string },
    res: { statusCode: number; setHeader: (k: string, v: string) => void; end: () => void },
    next: () => void,
  ) => {
    const url = req.url?.split('?')[0] ?? '';
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
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  plugins: [react(), tsconfigPaths(), legacyFuncionalidadesRedirect()],
});
