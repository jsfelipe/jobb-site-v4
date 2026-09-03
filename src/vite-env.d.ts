/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_JOBBADMIN_API_URL: string;
  readonly GEMINI_API_KEY?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
