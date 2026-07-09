import type {
  // CriarContaJobResponse,
  // CriarContaTestePayload,
  // CriarContaTesteResponse,
  // ProvisionStatusResponse,
  TesteGratisForm,
  TesteGratisResponse,
  // VerificarDominioResponse,
} from '@/types/testeGratis';

const API_BASE_URL = 'https://apijobbadmin.sistemajobb.com.br/api/';
// const APP_ACCESS_URL = 'https://app.sistemajobb.com.br';
// const POLL_INTERVAL_MS = 3000;
// const POLL_MAX_MS = 15 * 60 * 1000;
// const POST_TIMEOUT_MS = 30000;

// function sleep(ms: number): Promise<void> {
//   return new Promise((resolve) => {
//     window.setTimeout(resolve, ms);
//   });
// }

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const body = (await response.json().catch(() => ({}))) as T & { message?: string };

  if (!response.ok) {
    const message =
      typeof body === 'object' && body !== null && 'message' in body && body.message
        ? String(body.message)
        : 'Erro na requisição';
    throw new Error(message);
  }

  return body;
}

// --- Criação automática de domínio / provisioning (desativado — reativar no futuro) ---
// interface PollContext {
//   id_cliente: number;
//   email: string;
//   subdominio: string;
//   login: string;
// }
//
// function toCriarContaResult(
//   data: CriarContaJobResponse | ProvisionStatusResponse,
//   fallbackLogin: string,
//   fallbackSubdominio?: string
// ): CriarContaTesteResponse {
//   const subdominio = data.subdominio ?? fallbackSubdominio;
//
//   return {
//     status: true,
//     link: data.link ?? APP_ACCESS_URL,
//     subdominio,
//     login: data.login ?? fallbackLogin,
//     message: data.message,
//   };
// }
//
// async function fetchProvisionStatusByJob(
//   jobId: string,
//   ctx: PollContext
// ): Promise<ProvisionStatusResponse> {
//   const params = new URLSearchParams({
//     id_cliente: String(ctx.id_cliente),
//     email: ctx.email,
//     subdominio: ctx.subdominio,
//   });
//   const response = await fetch(
//     `${API_BASE_URL}testegratis/criar-conta/status/${encodeURIComponent(jobId)}?${params}`
//   );
//
//   if (response.status === 404) {
//     return fetchProvisionStatusRecovery(ctx);
//   }
//
//   return parseJsonResponse<ProvisionStatusResponse>(response);
// }
//
// async function fetchProvisionStatusRecovery(ctx: PollContext): Promise<ProvisionStatusResponse> {
//   const params = new URLSearchParams({
//     id_cliente: String(ctx.id_cliente),
//     email: ctx.email,
//     subdominio: ctx.subdominio,
//   });
//   const response = await fetch(`${API_BASE_URL}testegratis/criar-conta/status?${params}`);
//
//   return parseJsonResponse<ProvisionStatusResponse>(response);
// }
//
// async function pollProvisionUntilDone(
//   ctx: PollContext,
//   jobId: string | undefined,
//   onProgress?: (message: string) => void
// ): Promise<CriarContaTesteResponse> {
//   const started = Date.now();
//
//   while (Date.now() - started < POLL_MAX_MS) {
//     const status = jobId
//       ? await fetchProvisionStatusByJob(jobId, ctx)
//       : await fetchProvisionStatusRecovery(ctx);
//
//     if (status.message) {
//       onProgress?.(status.message);
//     }
//
//     const provisionStatus = status.provision_status;
//
//     if (provisionStatus === 'completed' && (status.link || status.subdominio)) {
//       return toCriarContaResult(status, ctx.login, ctx.subdominio);
//     }
//
//     if (provisionStatus === 'failed') {
//       throw new Error(status.message ?? 'Não foi possível criar sua conta.');
//     }
//
//     if (!jobId && status.job_id) {
//       jobId = status.job_id;
//     }
//
//     await sleep(POLL_INTERVAL_MS);
//   }
//
//   throw new Error('A criação da conta demorou mais que o esperado. Aguarde alguns minutos e tente acessar o link do seu domínio.');
// }

export async function submitTesteGratis(data: TesteGratisForm): Promise<TesteGratisResponse> {
  const response = await fetch(`${API_BASE_URL}testegratis`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return parseJsonResponse<TesteGratisResponse>(response);
}

// export async function verificarDominio(subdominio: string): Promise<VerificarDominioResponse> {
//   const params = new URLSearchParams({ subdominio });
//   const response = await fetch(`${API_BASE_URL}testegratis/verificar-dominio?${params}`);
//
//   return parseJsonResponse<VerificarDominioResponse>(response);
// }
//
// export async function criarContaTeste(
//   data: CriarContaTestePayload,
//   onProgress?: (message: string) => void
// ): Promise<CriarContaTesteResponse> {
//   const ctx: PollContext = {
//     id_cliente: data.id_cliente,
//     email: data.email,
//     subdominio: data.subdominio,
//     login: data.login,
//   };
//
//   const controller = new AbortController();
//   const timeoutId = window.setTimeout(() => controller.abort(), POST_TIMEOUT_MS);
//
//   let jobId: string | undefined;
//
//   try {
//     const response = await fetch(`${API_BASE_URL}testegratis/criar-conta`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//       signal: controller.signal,
//     });
//
//     const json = (await response.json().catch(() => ({}))) as CriarContaJobResponse;
//
//     if (response.ok && json.link) {
//       return toCriarContaResult(json, ctx.login, ctx.subdominio);
//     }
//
//     if (response.ok && (response.status === 202 || json.job_id)) {
//       jobId = json.job_id;
//       onProgress?.(json.message ?? 'Processando criação da sua conta...');
//       return pollProvisionUntilDone(ctx, jobId, onProgress);
//     }
//
//     if (!response.ok) {
//       throw new Error(json.message ?? 'Não foi possível iniciar a criação da conta.');
//     }
//
//     if (json.job_id) {
//       jobId = json.job_id;
//       return pollProvisionUntilDone(ctx, jobId, onProgress);
//     }
//
//     throw new Error(json.message ?? 'Resposta inesperada ao criar conta.');
//   } catch (err) {
//     const isAbort = err instanceof DOMException && err.name === 'AbortError';
//     const isNetwork =
//       err instanceof TypeError ||
//       (err instanceof Error && err.message.includes('Failed to fetch'));
//
//     if (isAbort || isNetwork) {
//       onProgress?.('Conexão interrompida. Verificando se sua conta foi criada...');
//       return pollProvisionUntilDone(ctx, jobId, onProgress);
//     }
//
//     if (err instanceof Error && err.message) {
//       onProgress?.('Verificando status da criação...');
//       try {
//         return await pollProvisionUntilDone(ctx, jobId, onProgress);
//       } catch {
//         throw err;
//       }
//     }
//
//     throw err;
//   } finally {
//     window.clearTimeout(timeoutId);
//   }
// }
