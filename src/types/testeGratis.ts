export interface TesteGratisForm {
  nome: string;
  email: string;
  contato: string;
  telefone: string;
  qtd_funcionarios: string;
  tipo_empresa: string;
  modulos_interesse: string;
  qtde_usuarios: number;
  codigo_promocao: string;
  uf_nfe: string;
}

export interface TesteGratisClienteData {
  id_cliente: number;
  email?: string;
}

export interface TesteGratisResponse {
  status?: boolean;
  id_cliente?: number;
  email?: string;
  data?: TesteGratisClienteData;
}

export interface VerificarDominioResponse {
  status?: boolean;
  available?: boolean;
  message?: string;
}

export interface CriarContaTestePayload {
  id_cliente: number;
  email: string;
  subdominio: string;
  login: string;
  senha: string;
  senha_confirmacao: string;
}

export type ProvisionStatus =
  | 'queued'
  | 'processing'
  | 'completed'
  | 'failed'
  | 'pending'
  | 'not_found';

export interface CriarContaJobResponse {
  status?: boolean;
  job_id?: string;
  link?: string;
  subdominio?: string;
  login?: string;
  message?: string;
  provision_status?: ProvisionStatus;
}

export interface ProvisionStatusResponse {
  status?: boolean;
  provision_status?: ProvisionStatus;
  job_id?: string;
  step?: string;
  message?: string;
  link?: string;
  subdominio?: string;
  login?: string | null;
}

export interface CriarContaTesteResponse {
  status?: boolean;
  link?: string;
  subdominio?: string;
  login?: string;
  message?: string;
}

export interface TesteGratisSuccessState {
  link: string;
  subdominio: string;
  login: string;
}

export interface TesteGratisCreatingState {
  creating: true;
  payload: CriarContaTestePayload;
}

export type TesteGratisSucessoLocationState =
  | TesteGratisSuccessState
  | TesteGratisCreatingState;

export const TESTE_GRATIS_STORAGE_KEYS = {
  idCliente: 'testeGratis_id_cliente',
  email: 'testeGratis_email',
} as const;

export const INTERESSE_OPTIONS = [
  { value: 'ApenasOrcamentos', label: 'Apenas Controle dos Orçamentos' },
  { value: 'OrcamentoFinanceiro', label: 'Orçamentos com integração financeira' },
  { value: 'Tarefas', label: 'Gestão de Tarefas' },
  { value: 'OrdemDia', label: 'Ordem do dia/Callsheet' },
] as const;

export const UF_OPTIONS = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
] as const;
