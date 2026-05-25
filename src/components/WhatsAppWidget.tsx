import { WhatsappLogo } from '@phosphor-icons/react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=5581994384020&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Sistema%20Jobb!';

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#14ba65] to-[#10db39] text-white shadow-lg transition-transform duration-500 hover:scale-110 hover:ring-4 hover:ring-white/45"
      >
        <WhatsappLogo size={40} weight="fill" aria-hidden="true" />
      </a>
    </div>
  );
}
