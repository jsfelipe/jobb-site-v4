interface IAItem {
  name: string;
  src: string;
  gradient: string;
}

const AI_LOGOS: IAItem[] = [
  {
    name: 'ChatGPT',
    src: '/images/Logotipos/ChatGPT.svg',
    gradient: 'from-[#10a37f] to-[#0a6b52]',
  },
  {
    name: 'Gemini',
    src: '/images/Logotipos/Gemini.webp',
    gradient: 'from-[#1ba0e1] via-[#9b72cb] to-[#d96570]',
  },
  {
    name: 'Claude',
    src: '/images/Logotipos/Claude_AI.webp',
    gradient: 'from-[#d97757] to-[#b35336]',
  },
  {
    name: 'Claude Code',
    src: '/images/Logotipos/Claude_Code.svg',
    gradient: 'from-[#ea580c] to-[#9a3412]',
  },
  {
    name: 'Perplexity',
    src: '/images/Logotipos/perplexity.svg',
    gradient: 'from-[#22b8cd] to-[#116979]',
  },
  {
    name: 'Copilot',
    src: '/images/Logotipos/Copilot.svg',
    gradient: 'from-[#0078d4] via-[#00bcf2] to-[#107c41]',
  },
  {
    name: 'DeepSeek',
    src: '/images/Logotipos/DeepSeek.svg',
    gradient: 'from-[#1e69ff] to-[#0a389c]',
  },
  {
    name: 'Midjourney',
    src: '/images/Logotipos/Midjourney.svg',
    gradient: 'from-[#8b5cf6] to-[#ec4899]',
  },
];

export function IAMarquee() {
  // Renderiza a lista duas vezes inline para o loop contínuo e sem emendas
  const doubleLogos = [...AI_LOGOS, ...AI_LOGOS];

  return (
    <div className="w-full mt-10 mb-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee-infinite hover:[animation-play-state:paused] gap-4 py-2">
        {doubleLogos.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            title={item.name}
            className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
          >
            {/* Gradiente absoluto com scale 1.5 e opacity 0 que passa para scale 1 e opacity 100 */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out`}
            />

            {/* Imagem do logotipo com inversão/brilho no hover */}
            <img
              src={item.src}
              alt={item.name}
              className="relative z-10 w-9 h-9 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
