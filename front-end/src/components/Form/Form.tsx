import React from "react";

import * as S from "./style";

export const Form: React.FC = () => {
  return (
    <S.Form>
      <S.Title>Informações da Vaga</S.Title>
      <S.Group>
        <S.Label>
          <S.Span>Nome da Vaga: </S.Span>
          <S.Input required placeholder="Nome da Vaga" type="text" />
        </S.Label>
        <S.Label>
          <S.Span>Status: </S.Span>

          <S.Select id="escolha" name="escolha" disabled>
            <option value={1}>Aberta</option>
            <option value={0}>Finalizada</option>
          </S.Select>
        </S.Label>
        <S.Label>
          <S.Span>Data de Criação: </S.Span>
          <S.Input value={"16/01/2025 15:47:41"} type="text" disabled />
        </S.Label>
        <S.Label>
          <S.Span>Última Atualização: </S.Span>
          <S.Input value={"16/01/2025 15:47:41"} type="text" readOnly />
        </S.Label>
        <S.ButtonWrap>
          <S.CreateButton>
            <p>Criar Vaga</p>
          </S.CreateButton>
          <S.CancelButton>
            <p>Cancelar</p>
          </S.CancelButton>
        </S.ButtonWrap>
      </S.Group>
    </S.Form>
  );
};
