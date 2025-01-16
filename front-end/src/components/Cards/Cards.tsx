import React from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { VagasCardProps } from "../../pages/CardList/CardList";

export const Cards: React.FC<VagasCardProps> = (vaga) => {
  const navigate = useNavigate();

  const handleEditButton = () => {
    navigate("/cards-info", {
      state: { vaga },
    });
  };

  return (
    <S.Card>
      <S.InfosWrapper>
        {vaga.status === "Finalizada" ? (
          <S.CardTitle style={{ textDecoration: "line-through" }}>
            {vaga.title}
          </S.CardTitle>
        ) : (
          <S.CardTitle>{vaga.title}</S.CardTitle>
        )}

        {vaga.status === "Finalizada" ? (
          <S.Status style={{ color: "red " }}>{vaga.status}</S.Status>
        ) : (
          <S.Status style={{ color: "green " }}>{vaga.status}</S.Status>
        )}

        {vaga.created_at === vaga.updated_at ? (
          <S.Date>Criado em: {vaga.created_at}</S.Date>
        ) : (
          <S.Date>Última atualização: {vaga.updated_at}</S.Date>
        )}
      </S.InfosWrapper>

      <S.ButtonWrapper>
        <S.InfoButton onClick={handleEditButton}>
          <p>Editar</p>
        </S.InfoButton>
      </S.ButtonWrapper>
    </S.Card>
  );
};
