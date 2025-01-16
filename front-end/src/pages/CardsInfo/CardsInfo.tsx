import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styles";

import { Header } from "../../components/Header/Header";
import axios from "axios";
import { VagasCardProps } from "../CardList/CardList";

export const CardsInfo: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const vagaLocation: VagasCardProps = location.state?.vaga;

  const [title, setTitle] = useState(vagaLocation?.title || "");
  const [status, setStatus] = useState(vagaLocation?.status || "");

  useEffect(() => {
    if (vagaLocation) {
      setTitle(vagaLocation.title);
      setStatus(vagaLocation.status);
    }
  }, [vagaLocation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (vagaLocation) {
        await axios.put(
          `https://localhost:7018/api/Vagas/EditarVaga?idVaga=${vagaLocation.id}`,
          {
            title,
            status,
          },
          {
            headers: {
              "Content-Type": "application/json",
              accept: "text/plain",
            },
          }
        );
        alert("A vaga foi atulizada com sucesso.");
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao salvar a vaga:", error);
      alert("Erro ao salvar a vaga");
    }
  };

  const handleDelButton = async () => {
    try {
      await axios.delete(
        `https://localhost:7018/api/Vagas/ExcluirVaga?idVaga=${vagaLocation.id}`
      );
      alert("Vaga Excluida com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao salvar a vaga:", error);
      alert("Erro ao deletar a vaga");
    }
  };

  return (
    <>
      <Header />

      <S.Form onSubmit={handleSubmit}>
        <S.Title>Informações da Vaga</S.Title>
        <S.Group>
          <S.Label>
            <S.Span>Nome da Vaga: </S.Span>
            <S.Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.Label>
          <S.Label>
            <S.Span>Status: </S.Span>

            <S.Select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Finalizada">Finalizada</option>
              <option value="Aberta">Aberta</option>
            </S.Select>
          </S.Label>
          <S.Label>
            <S.Span>Data de Criação: </S.Span>
            <S.Input value={vagaLocation.created_at} type="text" readOnly />
          </S.Label>
          <S.Label>
            <S.Span>Última Atualização: </S.Span>
            <S.Input value={vagaLocation.updated_at} type="text" readOnly />
          </S.Label>
          <S.ButtonWrap>
            <S.CreateButton type="submit">
              <p>Atualizar</p>
            </S.CreateButton>
            <S.CancelButton type="button" onClick={handleDelButton}>
              <p>Excluir</p>
            </S.CancelButton>
          </S.ButtonWrap>
        </S.Group>
      </S.Form>
    </>
  );
};
