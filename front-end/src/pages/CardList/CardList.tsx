import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { Cards } from "../../components/Cards/Cards";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export interface VagasCardProps {
  id: number;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const CardList: React.FC = () => {
  const [vagas, setVagas] = useState<VagasCardProps[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadVagas() {
      const resposta = await axios.get(
        "https://localhost:7018/api/Vagas/ListarVagas"
      );
      const vagasData = resposta.data;

      setVagas(vagasData.dados);
    }
    loadVagas();
  }, []);

  return (
    <>
      <Header />
      <S.CardsList>
        <S.CardsWrapper>
          <S.AddButton
            onClick={() => {
              navigate("/card-create");
            }}
          >
            <S.ButtonText>Nova vaga</S.ButtonText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke="currentColor"
              height="24"
              fill="none"
            >
              <line y2="19" y1="5" x2="12" x1="12"></line>
              <line y2="12" y1="12" x2="19" x1="5"></line>
            </svg>
          </S.AddButton>
          {vagas.map((vaga) => {
            return (
              <Cards
                key={vaga.id}
                id={vaga.id}
                title={vaga.title}
                status={vaga.status}
                created_at={vaga.created_at}
                updated_at={vaga.updated_at}
              />
            );
          })}
        </S.CardsWrapper>
      </S.CardsList>
    </>
  );
};
