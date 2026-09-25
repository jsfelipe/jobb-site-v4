import { motion } from 'motion/react';

export function IAMCPIntegration() {
  return (
    <section className="section-padding bg-[#191919] border-t border-white/5">
      <div className="container-custom max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado Esquerdo: Conteúdo Textual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            {/* Tag / Eyebrow em laranja uppercase */}
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF4D00] uppercase mb-6 inline-block">
              MODEL CONTEXT PROTOCOL &bull; MCP
            </span>

            {/* Título */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.15]">
              Conecte o Jobb à sua<br className="hidden sm:inline" /> plataforma de IA
            </h2>

            {/* Parágrafo explicativo */}
            <p className="text-[#a1a1aa] leading-relaxed text-[16px] md:text-[17px] mb-8 max-w-xl">
              Além das telas do sistema, o Jobb se conecta a assistentes de IA pelo Model Context Protocol (MCP). Em Cursor, Claude Desktop, VS Code e outros clientes compatíveis, você pede em linguagem natural: listar fornecedores, criar lançamento, consultar acompanhamento financeiro ou abrir projeto.
            </p>

            {/* Frase de Destaque */}
            <div className="text-white text-[17px] md:text-[18px] leading-snug font-medium">
              <p>A conexão usa a mesma API REST do Jobb,</p>
              <p>com autenticação da sua conta.</p>
            </div>
          </motion.div>

          {/* Lado Direito: Card Mockup MCP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-full flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[480px] bg-[#141414] border border-white/5 rounded-[28px] p-8 sm:p-10 shadow-2xl flex flex-col space-y-7">
              {/* Cabeçalho do Card */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Fale com o Jobb<br />
                  onde você já trabalha.
                </h3>
                <div className="text-[11px] font-semibold text-[#8e8e93] tracking-widest uppercase mt-4 space-y-1">
                  <p className="space-x-3">
                    <span>CURSOR</span>
                    <span>CLAUDE DESKTOP</span>
                    <span>VS CODE</span>
                  </p>
                  <p>OUTROS CLIENTES COMPATÍVEIS</p>
                </div>
              </div>

              {/* Bloco Central Laranja (JOBB MCP) */}
              <div className="rounded-2xl bg-gradient-to-r from-[#FF3B00] to-[#FF5E00] p-7 text-center text-white shadow-lg shadow-orange-600/25">
                <div className="text-xl font-extrabold tracking-wider uppercase mb-1">
                  JOBB MCP
                </div>
                <div className="text-sm sm:text-[15px] font-semibold text-white/95">
                  API REST + autenticação da conta
                </div>
              </div>

              {/* Bloco de Exemplos em Linguagem Natural */}
              <div className="rounded-2xl bg-[#1e1e1e] border border-white/5 p-6 space-y-4 text-sm sm:text-[15px] text-[#e4e4e7]">
                <p>“Liste os fornecedores ativos.”</p>
                <p>“Crie um lançamento para este projeto.”</p>
                <p>“Abra o acompanhamento financeiro.”</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
