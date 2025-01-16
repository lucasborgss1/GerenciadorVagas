import axios from "axios";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useState } from "react";

export const CardCreate: React.FC = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleCancel = () => {
    alert("Operação Cancelada!");
    navigate("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(
        `https://localhost:7018/api/Vagas/CriarVaga`,
        {
          title,
        },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "text/plain",
          },
        }
      );
      alert("A vaga foi criada com sucesso.");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar a vaga:", error);
      alert("Erro ao salvar a vaga");
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

            <S.Select id="status" disabled>
              <option value="Aberta">Aberta</option>
              <option value="Finalizada">Finalizada</option>
            </S.Select>
          </S.Label>
          <S.Label>
            <S.Span>Data de Criação: </S.Span>
            <S.Input value={""} type="text" disabled />
          </S.Label>
          <S.Label>
            <S.Span>Última Atualização: </S.Span>
            <S.Input value={""} type="text" readOnly />
          </S.Label>
          <S.ButtonWrap>
            <S.CreateButton type="submit">
              <p>Criar</p>
            </S.CreateButton>
            <S.CancelButton onClick={handleCancel} type="button">
              <p>Cancelar</p>
            </S.CancelButton>
          </S.ButtonWrap>
        </S.Group>
      </S.Form>
    </>
  );
};
