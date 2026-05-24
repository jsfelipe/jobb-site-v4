export const SUBDOMINIO_MAX_LENGTH = 20;
export const LOGIN_MAX_LENGTH = 10;

const ACCENT_PATTERN = /[\u0300-\u036f]/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCESS_IDENTIFIER_PATTERN = /^[a-z0-9]+$/;

export function hasSpaces(value: string): boolean {
  return /\s/.test(value);
}

export function hasAccents(value: string): boolean {
  return ACCENT_PATTERN.test(value.normalize('NFD'));
}

export function isEmailLike(value: string): boolean {
  return EMAIL_PATTERN.test(value.trim());
}

export function sanitizeAccessIdentifier(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

export function validateSubdominio(value: string): string | null {
  const trimmed = value.trim();

  if (!trimmed) {
    return 'Informe o domínio da sua conta.';
  }

  if (trimmed.length > SUBDOMINIO_MAX_LENGTH) {
    return `O domínio pode ter no máximo ${SUBDOMINIO_MAX_LENGTH} caracteres.`;
  }

  if (hasSpaces(trimmed)) {
    return 'O domínio não pode conter espaços.';
  }

  if (hasAccents(trimmed)) {
    return 'O domínio não pode conter acentos ou caracteres especiais.';
  }

  if (!ACCESS_IDENTIFIER_PATTERN.test(trimmed.toLowerCase())) {
    return 'Use apenas letras minúsculas e números no domínio.';
  }

  return null;
}

export function validateLogin(value: string): string | null {
  const trimmed = value.trim();

  if (!trimmed) {
    return 'Informe o login de acesso.';
  }

  if (trimmed.length > LOGIN_MAX_LENGTH) {
    return `O login pode ter no máximo ${LOGIN_MAX_LENGTH} caracteres.`;
  }

  if (hasSpaces(trimmed)) {
    return 'O login não pode conter espaços.';
  }

  if (hasAccents(trimmed)) {
    return 'O login não pode conter acentos ou caracteres especiais.';
  }

  if (isEmailLike(trimmed)) {
    return 'O login não pode ser um e-mail. Escolha um nome de usuário.';
  }

  if (!ACCESS_IDENTIFIER_PATTERN.test(trimmed.toLowerCase())) {
    return 'Use apenas letras e números no login.';
  }

  return null;
}
