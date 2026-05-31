import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
    title: 'Termos de Uso | Jobb',
    description: 'Termos e Condições de Uso da plataforma Jobb.',
};

export default function TermosDeUsoPage() {
    return (
        <div className="min-h-screen bg-jobb-dark text-jobb-text font-sans flex flex-col bg-[#232323]">
            <Header />
            <main className="flex-grow">

                <div className="container-custom pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Termos de Uso</h1>
                    <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
                        Última atualização: Março de 2026
                    </p>
                </div>

                <section className="bg-secondary section-padding py-16">

                    <div className="container-custom max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-invert max-w-none prose-p:text-[#a3a3a3] prose-headings:text-white prose-li:text-[#a3a3a3] prose-strong:text-white">
                            <p>
                                Leia com atenção os termos que regem nossa relação. Antes de usar o Jobb é importante que você leia e concorde com estes termos.
                            </p>
                            <p>
                                Ao efetuar seu cadastro para utilização dos serviços, ou aceitar estes termos, você concorda com os termos, sem modificações.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Contrato de Licença de Usuário Final</h2>
                            <p>
                                Este Contrato de Licença de Usuário Final é um acordo legal entre o licenciado (pessoa física ou jurídica) (o “LICENCIADO”) e a JOBBLIVE TECNOLOGIA LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob n. 65.251.197/0001-87, com sede na Av. Governador Agamenon Magalhães, 4575 – Sala 1401, Edifício Emp. Nassau, Caixa Postal 018, Paissandu, Recife/PE, CEP: 50070-255 - Brasil, (a “LICENCIANTE”) para uso do programa de computador denominado Sistema Jobb, disponibilizado neste ato pela LICENCIANTE (o “SOFTWARE”), pelo prazo determinado pelo LICENCIADO no ato do licenciamento do SOFTWARE, o que inclui o programa de computador e pode incluir os meios físicos associados, quaisquer materiais impressos, e qualquer documentação “online” ou eletrônica. Ao utilizar o SOFTWARE, mesmo que parcial ou a título de teste, o licenciado estará vinculado a este contrato, concordando com os mesmos, principalmente CONSENTINDO COM O ACESSO, COLETA, ARMAZENAMENTO, TRATAMENTO E TÉCNICAS DE PROTEÇÃO ÀS INFORMAÇÕES do LICENCIADO para a integral execução das funcionalidades ofertadas pelo SOFTWARE. Em caso de discordância dos termos aqui apresentados, a utilização do SOFTWARE deve ser imediatamente interrompida.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Propriedade do software</h2>
                            <p>
                                O PRESENTE software (sistema) foi desenvolvido e criado pela empresa LICENCIANTE, e todos os seus direitos pertencem à mesma.
                            </p>
                            <p>
                                O LICENCIADO não adquire, pelo presente instrumento, nenhum direito de propriedade intelectual ou outros direitos exclusivos, incluindo patentes, desenhos, marcas, direitos autorais ou direitos sobre informações confidenciais ou segredos de negócio, sobre ou relacionados ao SOFTWARE ou nenhuma parte dele. Quaisquer direitos não expressamente concedidos sob o presente instrumento são reservados.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Licença de uso do software</h2>
                            <p>
                                Sujeito aos termos e condições do presente instrumento, este TERMO concede ao LICENCIADO uma licença revogável, não exclusiva e intransferível para usar o SOFTWARE. O LICENCIADO não poderá utilizar e nem permitir o uso do SOFTWARE para uma outra finalidade que não seja o uso interno. Esta licença não implica na capacidade de acessar outros softwares além daqueles originalmente localizados no SOFTWARE. Em nenhuma hipótese o LICENCIADO terá acesso ao código fonte do SOFTWARE ora licenciado, por este se tratar de propriedade intelectual da LICENCIANTE.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Pagamento e cancelamento</h2>
                            <p>
                                O LICENCIADO deve pagar à LICENCIANTE o valor do respectivo plano escolhido de acordo com a periodicidade definida entre as opções de pagamento disponibilizadas ao LICENCIADO.
                            </p>
                            <p>
                                Caso o LICENCIADO, no decorrer da vigência do presente instrumento, opte por outro plano de licenciamento, os valores serão alterados de acordo com o respectivo plano escolhido.
                            </p>
                            <p>
                                A falta de pagamento nas datas determinadas para seu vencimento acarretará na suspensão de acesso ao SOFTWARE até que as pendências financeiras sejam regularizadas.
                            </p>
                            <p>
                                Caso a suspensão permaneça por prazo superior a 90 (noventa) dias, a LICENCIANTE poderá excluir integralmente as informações lançadas no SOFTWARE pelo LICENCIADO.
                            </p>
                            <p>
                                Os valores estabelecidos no ato do licenciamento do SOFTWARE serão atualizados anualmente ou no menor lapso de tempo legalmente permitido pelo IGPM-FGV acumulado no período, ou no caso de extinção deste, de outro índice oficial que venha a substituí-lo.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Banco de dados e arquivos anexados</h2>
                            <p>
                                Suspenso o acesso ao SOFTWARE, a LICENCIANTE manterá as informações do LICENCIADO lançadas no mesmo pelo período de 6 (seis) meses, contados da suspensão de acesso. Neste período, a LICENCIANTE tornará as informações do LICENCIADO disponíveis para serem extraídas do SOFTWARE em formato .xsl (Excel) relativo ao banco de dados e também disponibilizará os arquivos anexados como .pdf, imagens.
                            </p>
                            <p>
                                Passados os 6 (seis) meses da suspensão do presente contrato, todas as INFORMAÇÕES do LICENCIADO, incluindo as pessoas, de conta e financeiras, em poder da LICENCIANTE serão excluídos permanentemente do banco de dados da LICENCIANTE, tendo sido extraídas ou não pelo LICENCIADO.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Da segurança da informação e política de privacidade</h2>
                            <p>
                                Todas as medidas de segurança necessárias são tomadas para garantir a privacidade dos dados armazenados, incluindo-se proteção contra acesso, roubo, alteração ou destruição. As técnicas de proteção utilizadas são as mais sofisticadas do mercado, aplicadas em várias camadas para garantir a confiabilidade e o sigilo das informações. Também são realizados backups automáticos dos dados 2 vezes ao dia em servidores espelhados, utilizando serviços de hospedagem em nuvem (Cloud).
                            </p>
                            <p>
                                As Informações da Conta do Usuário são protegidas com senha por medida de segurança e garantia da privacidade, sendo de total e integral responsabilidade do mesmo o sigilo e a confidencialidade da referida senha e o uso dos serviços com a mesma.
                            </p>
                            <p>
                                Não divulgamos em hipótese alguma dados pessoais cadastrados em nosso sistema. Restringimos o acesso a informações pessoais por parte de funcionários que necessitam ter acesso as informações para suporte ou manutenções programadas, e que estão sujeitos a obrigações contratuais de confidencialidade, podendo ser processados se deixarem de cumprir o contrato.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Prazo</h2>
                            <p>
                                O presente Termo entra em vigor na data de seu aceite pelo LICENCIADO e vigorará por prazo indeterminado.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Rescisão</h2>
                            <p>
                                Quanto à rescisão, O LICENCIADO poderá solicitar a qualquer tempo, desde que esteja sem saldo devedor e que seja comunicado expressamente à LICENCIANTE por escrito. A LICENCIANTE fica isenta de quaisquer reembolso de parcelas pagas.
                            </p>

                            <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">Fórum</h2>
                            <p>
                                Fica eleito o Fórum da cidade do Recife/PE para esclarecer quaisquer dúvidas, caso estas venham a ocorrer no tocante ao cumprimento das Cláusulas pactuadas neste Contrato.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
