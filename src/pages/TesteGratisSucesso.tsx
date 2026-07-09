// import { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import TesteGratisProvisioning from '@/components/teste-gratis/TesteGratisProvisioning';
import TesteGratisSuccessLayout from '@/components/teste-gratis/TesteGratisSuccessLayout';
// import { criarContaTeste } from '@/services/testeGratisApi';
// import {
//   TESTE_GRATIS_STORAGE_KEYS,
//   type TesteGratisSuccessState,
//   type TesteGratisSucessoLocationState,
// } from '@/types/testeGratis';

// --- Fluxo antigo: provisioning / criação automática de domínio (desativado) ---
// function isCreatingState(
//   state: TesteGratisSucessoLocationState | null
// ): state is Extract<TesteGratisSucessoLocationState, { creating: true }> {
//   return Boolean(state && 'creating' in state && state.creating && state.payload);
// }
//
// function isSuccessState(state: TesteGratisSucessoLocationState | null): state is TesteGratisSuccessState {
//   if (!state || 'creating' in state) {
//     return false;
//   }
//
//   return Boolean(state.link || state.subdominio);
// }

export default function TesteGratisSucesso() {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const locationState = location.state as TesteGratisSucessoLocationState | null;
  //
  // const [successState, setSuccessState] = useState<TesteGratisSuccessState | null>(() =>
  //   isSuccessState(locationState) ? locationState : null
  // );
  // const [error, setError] = useState('');
  //
  // const creatingPayload = isCreatingState(locationState) ? locationState.payload : null;
  //
  // useEffect(() => {
  //   if (!creatingPayload || successState) {
  //     return undefined;
  //   }
  //
  //   let cancelled = false;
  //
  //   criarContaTeste(creatingPayload)
  //     .then((result) => {
  //       if (cancelled) {
  //         return;
  //       }
  //
  //       sessionStorage.removeItem(TESTE_GRATIS_STORAGE_KEYS.idCliente);
  //       sessionStorage.removeItem(TESTE_GRATIS_STORAGE_KEYS.email);
  //
  //       if (!result.link || !result.subdominio) {
  //         throw new Error('Conta criada, mas o link de acesso não foi retornado.');
  //       }
  //
  //       const nextState: TesteGratisSuccessState = {
  //         link: result.link,
  //         subdominio: result.subdominio,
  //         login: result.login ?? creatingPayload.login,
  //       };
  //
  //       setSuccessState(nextState);
  //       navigate('/teste-gratis/sucesso', { replace: true, state: nextState });
  //     })
  //     .catch((err) => {
  //       if (cancelled) {
  //         return;
  //       }
  //
  //       setError(err instanceof Error ? err.message : 'Erro ao criar conta. Tente novamente.');
  //     });
  //
  //   return () => {
  //     cancelled = true;
  //   };
  // }, [creatingPayload, navigate, successState]);
  //
  // if (creatingPayload && !successState && !error) {
  //   return (
  //     <>
  //       <Helmet>
  //         <title>Criando conta | Sistema Jobb</title>
  //       </Helmet>
  //
  //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F93F06] via-[#ED6D05] to-[#FF6A00] px-4 py-8">
  //         <section className="w-full max-w-2xl">
  //           <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#171717] to-[#232323] p-10 text-center shadow-2xl">
  //             <TesteGratisProvisioning />
  //           </div>
  //         </section>
  //       </div>
  //     </>
  //   );
  // }
  //
  // if (error) {
  //   return (
  //     <>
  //       <Helmet>
  //         <title>Erro ao criar conta | Sistema Jobb</title>
  //       </Helmet>
  //
  //       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F93F06] via-[#ED6D05] to-[#FF6A00] px-4 py-8">
  //         <section className="w-full max-w-2xl">
  //           <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#171717] to-[#232323] p-10 text-center shadow-2xl">
  //             <h2 className="text-xl font-bold text-white md:text-2xl">{error}</h2>
  //             <Link
  //               to="/teste-gratis?continuar=1"
  //               className="btn gradient mt-8 inline-block px-8 py-3 text-base text-white"
  //             >
  //               Tentar novamente
  //             </Link>
  //             <Link to="/" className="mt-4 text-sm text-white/70 underline hover:text-white">
  //               Voltar ao site
  //             </Link>
  //           </div>
  //         </section>
  //       </div>
  //     </>
  //   );
  // }
  //
  // if (successState?.link || successState?.subdominio) {
  //   return (
  //     <TesteGratisSuccessLayout
  //       title="Conta criada | Sistema Jobb"
  //       message="Sua conta teste foi criada com sucesso! Acesse o Jobb com seu domínio e login abaixo."
  //       link={successState.link}
  //       subdominio={successState.subdominio}
  //       login={successState.login}
  //     />
  //   );
  // }

  return (
    <TesteGratisSuccessLayout
      title="Cadastro realizado | Sistema Jobb"
      message="Seu cadastro foi realizado com sucesso! Em breve entraremos em contato para liberar o teste e apresentar uma proposta."
    />
  );
}
