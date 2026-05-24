import { Button } from '@/components/ui/button';

interface TesteGratisAlertDialogProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export default function TesteGratisAlertDialog({
  open,
  message,
  onClose,
}: TesteGratisAlertDialogProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="teste-gratis-alert-title"
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
      >
        <h3 id="teste-gratis-alert-title" className="text-lg font-semibold text-gray-900">
          Atenção
        </h3>
        <p className="mt-3 text-sm text-gray-600">{message}</p>
        <div className="mt-6 flex justify-end">
          <Button type="button" className="btn gradient px-6 py-2" onClick={onClose}>
            Entendi
          </Button>
        </div>
      </div>
    </div>
  );
}
