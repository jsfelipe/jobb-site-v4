// Desativado no fluxo atual (só cadastro JobbAdmin). Manter para reativar criação automática de domínio.
import { useEffect, useMemo, useState } from 'react';
import { shuffleProvisionMessages } from '@/components/teste-gratis/provisionWaitingMessages';

const ROTATE_INTERVAL_MS = 3500;

export default function TesteGratisProvisioning() {
  const shuffledMessages = useMemo(() => shuffleProvisionMessages(), []);
  const [messageIndex, setMessageIndex] = useState(0);

  const displayMessage = shuffledMessages[messageIndex % shuffledMessages.length];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % shuffledMessages.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [shuffledMessages.length]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-jobb-orange border-t-transparent" />
      <div>
        <h3 className="text-lg font-semibold text-white">Criando sua conta teste</h3>
        <p className="mt-2 min-h-[1.25rem] text-sm text-white/80 transition-opacity duration-300">
          {displayMessage}
        </p>
        <p className="mt-4 text-xs font-bold text-white/70">
          Isso pode levar alguns minutos. Não feche esta página.
        </p>
      </div>
    </div>
  );
}
