import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface TesteGratisSuccessProps {
  title: string;
  message: string;
  // --- Props do fluxo com domínio/login (desativado — reativar no futuro) ---
  // link?: string;
  // subdominio?: string;
  // login?: string;
}

export default function TesteGratisSuccessLayout({
  title,
  message,
  // link,
  // subdominio,
  // login,
}: TesteGratisSuccessProps) {
  // const accessUrl = link ?? 'https://app.sistemajobb.com.br';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F93F06] via-[#ED6D05] to-[#FF6A00] px-4 py-8">
        <section className="w-full max-w-2xl">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#171717] to-[#232323] p-10 text-center shadow-2xl">
            <img src="/images/icon/check.svg" alt="" className="mb-6 h-20 w-20" />
            <h2 className="text-xl font-bold leading-relaxed text-white md:text-2xl">{message}</h2>

            {/* {(subdominio || login || link) && (
              <div className="mt-6 space-y-3 text-white/90">
                <p className="text-sm">
                  Acesse{' '}
                  <a
                    href={accessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white underline"
                  >
                    {accessUrl}
                  </a>
                </p>
                {subdominio && (
                  <p className="text-sm">
                    Domínio: <strong className="text-white">{subdominio}</strong>
                  </p>
                )}
                {login && (
                  <p className="text-sm">
                    Login: <strong className="text-white">{login}</strong>
                  </p>
                )}
                <a
                  href={accessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn gradient inline-block px-8 py-3 text-base text-white"
                >
                  Acessar meu Jobb
                </a>
              </div>
            )} */}

            <Link to="/" className="mt-8 text-sm text-white/70 underline hover:text-white">
              Voltar ao site
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
