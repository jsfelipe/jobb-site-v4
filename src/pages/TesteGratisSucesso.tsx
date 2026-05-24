import { useLocation } from 'react-router-dom';
import TesteGratisSuccessLayout from '@/components/teste-gratis/TesteGratisSuccessLayout';
import type { TesteGratisSuccessState } from '@/types/testeGratis';

export default function TesteGratisSucesso() {
  const location = useLocation();
  const state = location.state as TesteGratisSuccessState | null;

  if (state?.link || state?.subdominio) {
    return (
      <TesteGratisSuccessLayout
        title="Conta criada | Sistema Jobb"
        message="Sua conta teste foi criada com sucesso! Acesse o Jobb com seu domínio e login abaixo."
        link={state.link}
        subdominio={state.subdominio}
        login={state.login}
      />
    );
  }

  return (
    <TesteGratisSuccessLayout
      title="Cadastro realizado | Sistema Jobb"
      message="Seu cadastro foi realizado com sucesso! Em breve entraremos em contato."
    />
  );
}
