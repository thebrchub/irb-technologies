/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAIL_PORTER_API_URL?: string;
  readonly VITE_MAIL_PORTER_API_KEY?: string;
  readonly VITE_CONTACT_RECIPIENT_EMAIL?: string;
  readonly VITE_MAIL_PORTER_BRAND?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
