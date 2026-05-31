import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
    title: 'Política de Privacidade | Jobb',
    description: 'Política de Tratamento de Dados e Privacidade da plataforma Jobb.',
};

export default function PoliticaPrivacidadePage() {
    return (
        <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans flex flex-col bg-[#232323]">
            <Header />
            <main className="flex-grow">

                <div className="container-custom pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Política de Privacidade</h1>
                    <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                        Última atualização: Março de 2026
                    </p>
                </div>

                <section className="bg-secondary section-padding py-16">

                    <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p>
                            Esta Política de Privacidade descreve como a JOBBLIVE TECNOLOGIA LTDA (“CONTRATADA”, “nós”, “Sistema Jobb”) coleta, utiliza, armazena e protege os dados pessoais no uso do sistema Jobb, em conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018). Ao utilizar o sistema, o usuário (“CONTRATANTE” ou “usuário”) concorda com os termos desta Política.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Controlador e Operador</h2>
                        <p><strong>Controlador dos dados:</strong> o CONTRATANTE</p>
                        <p><strong>Operadora dos dados:</strong> JOBBLIVE TECNOLOGIA LTDA, CNPJ 65.251.197/0001-87, com sede na Av. Governador Agamenon Magalhães, 4575 – Sala 1401, Edifício Emp. Nassau, Caixa Postal 018, Paissandu, Recife/PE, CEP: 50070-255.</p>
                        <p>O CONTRATANTE insere e gerencia os dados pessoais próprios e de terceiros; a CONTRATADA apenas processa essas informações para execução dos serviços contratados.</p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Dados pessoais coletados</h2>
                        <p>Podemos coletar:</p>

                        <h3 className="text-xl font-medium mt-6 mb-3 text-white">3.1 Dados informados pelo CONTRATANTE</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Nome</li>
                            <li>E-mail</li>
                            <li>Telefone</li>
                            <li>Nome da empresa</li>
                            <li>CNPJ</li>
                            <li>Informações de acesso (login)</li>
                            <li>Dados inseridos pelo CONTRATANTE no sistema, incluindo: clientes, projetos, informações financeiras e orçamentárias, anexos, arquivos, imagens, documentos e dados operacionais necessários ao uso do sistema.</li>
                        </ul>

                        <h3 className="text-xl font-medium mt-6 mb-3 text-white">3.2 Dados coletados automaticamente</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Endereço IP</li>
                            <li>Logs de acesso</li>
                            <li>Cookies</li>
                            <li>Informações de dispositivo e navegador</li>
                            <li>Dados de utilização do sistema</li>
                        </ul>

                        <h3 className="text-xl font-medium mt-6 mb-3 text-white">3.3 Dados de autenticação</h3>
                        <p>Caso o usuário opte, a plataforma permite login via Google OAuth.</p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Finalidade do uso dos dados</h2>
                        <p>Os dados são tratados para:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Identificação e autenticação de usuários</li>
                            <li>Prestação dos serviços do Sistema Jobb</li>
                            <li>Execução do contrato</li>
                            <li>Suporte técnico</li>
                            <li>Comunicação com o usuário</li>
                            <li>Geração de relatórios e funcionalidades internas</li>
                            <li>Segurança, prevenção a fraudes e controle de acesso</li>
                            <li>Atendimento a obrigações legais e auditorias</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Base legal para o tratamento</h2>
                        <p>O tratamento é realizado com base em:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Execução de contrato</li>
                            <li>Cumprimento de obrigação legal</li>
                            <li>Exercício regular de direitos</li>
                            <li>Interesse legítimo (segurança, logs, prevenção a fraudes)</li>
                            <li>Consentimento, quando aplicável</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Armazenamento e Segurança dos Dados</h2>
                        <p>Os dados são armazenados em servidores da Amazon Web Services (AWS), que possui certificações internacionais de segurança.</p>
                        <p>A CONTRATADA utiliza medidas como:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Criptografia</li>
                            <li>Backups diários</li>
                            <li>Controle de acesso restrito</li>
                            <li>Monitoramento</li>
                            <li>Protocolos de segurança e boas práticas</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Compartilhamento</h2>
                        <p>Os dados não são compartilhados com terceiros, exceto quando necessário para:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Hospedagem (AWS)</li>
                            <li>Autenticação (Google OAuth, se utilizado)</li>
                            <li>E-mail transacional ou suporte técnico</li>
                            <li>Cumprimento de obrigação legal</li>
                            <li>Atendimento a ordem judicial ou da ANPD</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Retenção e exclusão de dados</h2>
                        <p>Os dados são mantidos enquanto o contrato estiver ativo.</p>
                        <p>Após rescisão:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Dados e anexos ficam disponíveis por 90 dias para download.</li>
                            <li>Backup integral fica disponível a pedido dentro de 90 dias após término.</li>
                            <li>Após esse período, seja em razão de não renovação do contrato ou de inadimplência superior ao prazo estabelecido, e desde que tenham sido realizados os avisos e notificações previstos, os dados poderão ser definitivamente excluídos.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Direitos do titular</h2>
                        <p>Os titulares podem solicitar:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Confirmação de tratamento</li>
                            <li>Acesso aos dados</li>
                            <li>Correção</li>
                            <li>Anonimização</li>
                            <li>Portabilidade</li>
                            <li>Exclusão, quando aplicável</li>
                            <li>Revogação de consentimento</li>
                            <li>Informações sobre uso e compartilhamento</li>
                        </ul>
                        <p>Pedidos devem ser enviados para: <a href="mailto:atendimento@sistemajobb.com.br" className="text-jobb-orange hover:underline cursor-pointer">atendimento@sistemajobb.com.br</a></p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Incidentes de Segurança</h2>
                        <p>Em caso de incidente que possa gerar risco ou dano aos titulares, o CONTRATANTE será notificado e receberá todas as informações necessárias para cumprimento da LGPD.</p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Uso de Cookies</h2>
                        <p>Utilizamos cookies para:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Desempenho</li>
                            <li>Autenticação</li>
                            <li>Segurança</li>
                            <li>Experiência de navegação</li>
                        </ul>
                        <p>O usuário pode gerenciar cookies diretamente no navegador.</p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Atualização da Política</h2>
                        <p>Esta Política poderá ser atualizada para refletir alterações legislativas, operacionais ou tecnológicas. A versão vigente estará sempre no site do Sistema Jobb.</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
