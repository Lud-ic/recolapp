import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts";
import { signOut } from "../../services/users/auth";

import ilustration from "../../assets/img/illustrations/empreendedor_ilu.svg";

import * as S from "./styles";

const HomeEntrepreneur = () => {
  const history = useHistory();

  const { user, setUser, setOrder, setOrderTimestamp } =
    useContext(UserContext);

  useEffect(() => {
    setOrder([]);
    setOrderTimestamp("");
  }, []);

  return (
    <>
      <S.PageE>
        <S.HeaderDesktop logged={isLogged} />

        <S.BackButtonHE
          handleBack={() => signOut(history, setUser)}
          pageTitle="Sair"
        />
        <S.FirstText>{`Olá, ${user?.name}!`}</S.FirstText>
        <S.mid>
          <S.image src={ilustration} alt="bussines man" />
          <S.ButtonRequest onClick={() => history.push("/request-collect")}>
            Solicitar coleta
          </S.ButtonRequest>
          <S.ButtonSchedules onClick={() => history.push("/schedules")}>
            Agendamentos
          </S.ButtonSchedules>
        </S.mid>
      </S.PageE>
      <S.TabBarHomeEnterpreneur />
    </>
  );
};
export default HomeEntrepreneur;
