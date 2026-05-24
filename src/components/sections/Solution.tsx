import {
    CheckCircleIcon,
    ChatCircleTextIcon,
    GearIcon,
    CurrencyDollarIcon,
    FilePdfIcon,
    GameControllerIcon,
    ChartBarIcon,
    LinkIcon,
    PaperPlaneTiltIcon,
    ReceiptIcon,
    BankIcon
} from '@/components/ui/phosphor-icons';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MotionDiv, MotionP, MotionHeader, MotionSpan, MotionSection } from '@/components/ui/motion';

export function Solution() {
    return (
        <section className="section-padding bg-gradient-to-b from-jobb-dark/0 to-jobb-dark">
            <div className="container-custom">
                <MotionDiv
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-jobb-orange text-white mb-6 text-[16px]">
                        <CheckCircleIcon size={20} /> Produtora com o Jobb
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Integre <span className="font-normal text-jobb-text-secondary">todos os setores da sua produtora!</span>
                    </h2>
                    <h3 className="text-jobb-text-secondary max-w-2xl">
                        Com o Sistema Jobb <span className="text-jobb-orange">sua produtora centraliza tudo</span> em um único lugar.
                    </h3>
                </MotionDiv>

                {/* Main Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                        { icon: ChatCircleTextIcon, title: "Atendimento", desc: "Cadastre os clientes, agências e fornecedores, faça os orçamentos, visualize e envie diretamente pelo sistema." },
                        { icon: GearIcon, title: "Gestão da produção", desc: "Cadastro da mão de obra envolvida, prestação de contas das despesas de produção por Jobb. Tudo numa única tela, sem complicações." },
                        { icon: CurrencyDollarIcon, title: "Financeiro completo", desc: "Financeiro totalmente integrado com a produção: faturamento, contas a pagar e receber, cheques, conciliação bancária, entre outros." },
                        { icon: FilePdfIcon, title: "Envio de PDF", desc: "Crie sua carta de orçamento com o timbrado ou marca da sua empresa e visualize antes de enviar." },
                        { icon: GameControllerIcon, title: "Controle do projeto", desc: "Controle seus prazos, tarefas e tempo. Melhore a comunicação entre a equipe e tenha um calendário de execução." },
                        { icon: ChartBarIcon, title: "Relatórios gerenciais", desc: "Tenha numa única tela uma visão completa do andamento do orçamento, pagamentos, recebimentos e lucro." },
                    ].map((feature, i) => (
                        <MotionDiv
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                            className="bg-card p-8 rounded-3xl transition-colors duration-300 hover:bg-jobb-bg-secondary group cursor-default shadow-none"
                        >
                            <feature.icon className="text-jobb-orange mb-6" size={32} weight="regular" />
                            <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                            <p className="text-jobb-text-secondary leading-relaxed text-[16px]">{feature.desc}</p>
                        </MotionDiv>
                    ))}
                </div>

                {/* Secondary Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { icon: LinkIcon, title: "Envio de cadastro de fornecedores por link", desc: "Agora seu fornecedor tem a facilidade de atualizar os próprios dados que ficam salvos automaticamente no sistema." },
                        { icon: PaperPlaneTiltIcon, title: "Envio de contratos via D4sign", desc: "Além de você gerar os contratos em PDF de uma maneira prática e automatizada, agora você já pode enviar os contratos para seus clientes." },
                        { icon: ReceiptIcon, title: "Emissão de nota fiscal de serviço eletrônica", desc: "A emissão de NFS-e integrada ao sistema financeiro traz agilidade e eficiência. Automação do processo de envio." },
                        { icon: BankIcon, title: "Conciliação bancária por arquivo Ofx", desc: "Tenha praticidade e economize tempo com nossa solução de conciliação bancária. Simplificamos o processo." },
                    ].map((feature, i) => (
                        <MotionDiv
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                            className=" rounded-2xl shadow-none"
                        >
                            <feature.icon className="text-jobb-orange mb-4" size={24} weight="regular" />
                            <h3 className="text-base text-white mb-2">{feature.title}</h3>
                            <p className="text-jobb-text-secondary leading-relaxed text-[16px]">{feature.desc}</p>
                        </MotionDiv>
                    ))}
                </div>

                <MotionDiv
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-center gap-6"
                >
                    <Link className="btn px-8 py-4 bg-card hover:bg-jobb-bg-secondary text-center" to="/funcionalidades">Mais funcionalidades</Link>
                    <Link className="btn px-8 py-4 gradient hover:bg-jobb-orange text-center" to="/teste-gratis">Teste grátis por 15 dias</Link>
                </MotionDiv>
            </div>
        </section>
    );
}
