import { useEffect, useState } from 'react';

const FALLBACK_MESSAGES = [
  'Validando seu endereço...',
  'Criando seu ambiente de teste...',
  'Instalando módulos do Jobb...',
  'Configurando seu usuário de acesso...',
  'Finalizando...',
] as const;

interface TesteGratisProvisioningProps {
  apiMessage?: string;
}

export default function TesteGratisProvisioning({ apiMessage }: TesteGratisProvisioningProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const displayMessage = apiMessage?.trim() || FALLBACK_MESSAGES[messageIndex];

  useEffect(() => {
    if (apiMessage?.trim()) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % FALLBACK_MESSAGES.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [apiMessage]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-jobb-orange border-t-transparent" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Criando sua conta teste</h3>
        <p className="mt-2 text-sm text-gray-600">{displayMessage}</p>
        <p className="mt-4 text-xs text-gray-500">
          Isso pode levar alguns minutos. Não feche esta página.
        </p>
      </div>
    </div>
  );
}
