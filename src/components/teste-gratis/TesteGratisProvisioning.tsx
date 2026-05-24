import { useEffect, useMemo, useState } from 'react';
import {
  isGenericApiProgressMessage,
  shuffleProvisionMessages,
} from '@/components/teste-gratis/provisionWaitingMessages';

const ROTATE_INTERVAL_MS = 3500;

interface TesteGratisProvisioningProps {
  apiMessage?: string;
}

export default function TesteGratisProvisioning({ apiMessage }: TesteGratisProvisioningProps) {
  const shuffledMessages = useMemo(() => shuffleProvisionMessages(), []);
  const [messageIndex, setMessageIndex] = useState(0);

  const showApiMessage =
    apiMessage?.trim() && !isGenericApiProgressMessage(apiMessage);

  const displayMessage = showApiMessage
    ? apiMessage.trim()
    : shuffledMessages[messageIndex % shuffledMessages.length];

  useEffect(() => {
    if (showApiMessage) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % shuffledMessages.length);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [showApiMessage, shuffledMessages.length]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-jobb-orange border-t-transparent" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Criando sua conta teste</h3>
        <p className="mt-2 min-h-[1.25rem] text-sm text-gray-600 transition-opacity duration-300">
          {displayMessage}
        </p>
        <p className="mt-4 text-xs text-gray-500">
          Isso pode levar alguns minutos. Não feche esta página.
        </p>
      </div>
    </div>
  );
}
