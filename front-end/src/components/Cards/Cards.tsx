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

    // Determina o estilo com base no status da vaga
    const isFinalizada = vaga.status === "Finalizada";

    return (
        <S.Card>
            <S.InfosWrapper>
                <S.CardTitle
                    style={{
                        textDecoration: isFinalizada ? "line-through" : "none",
                    }}
                >
                    {vaga.title}
                </S.CardTitle>

                <S.Status style={{ color: isFinalizada ? "red" : "green" }}>
                    {vaga.status}
                </S.Status>

                <S.Date>
                    {vaga.created_at === vaga.updated_at
                        ? `Criado em: ${vaga.created_at}`
                        : `Última atualização: ${vaga.updated_at}`}
                </S.Date>
            </S.InfosWrapper>

            <S.ButtonWrapper>
                <S.InfoButton onClick={handleEditButton}>
                    <p>Editar</p>
                </S.InfoButton>
            </S.ButtonWrapper>
        </S.Card>
    );
};
