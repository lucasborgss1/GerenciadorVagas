import React from "react";
import * as S from "./style";

interface FormProps {
    title: string;
    status: string;
    createdAt?: string;
    updatedAt?: string;
    isEditable: boolean;
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    onDelete?: () => void;
    onTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onStatusChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Form: React.FC<FormProps> = ({
    title,
    status,
    createdAt = "",
    updatedAt = "",
    isEditable,
    onSubmit,
    onCancel,
    onDelete,
    onTitleChange,
    onStatusChange,
}) => {
    return (
        <S.Form onSubmit={onSubmit}>
            <S.Title>Informações da Vaga</S.Title>
            <S.Group>
                <S.Label>
                    <S.Span>Nome da Vaga: </S.Span>
                    <S.Input
                        id="title"
                        type="text"
                        value={title}
                        onChange={onTitleChange}
                        disabled={!isEditable}
                    />
                </S.Label>
                <S.Label>
                    <S.Span>Status: </S.Span>
                    <S.Select
                        id="status"
                        value={status}
                        onChange={onStatusChange}
                        disabled={!isEditable}
                    >
                        <option value="Aberta">Aberta</option>
                        <option value="Finalizada">Finalizada</option>
                    </S.Select>
                </S.Label>
                <S.Label>
                    <S.Span>Data de Criação: </S.Span>
                    <S.Input value={createdAt} type="text" readOnly />
                </S.Label>
                <S.Label>
                    <S.Span>Última Atualização: </S.Span>
                    <S.Input value={updatedAt} type="text" readOnly />
                </S.Label>
                <S.ButtonWrap>
                    <S.CreateButton type="submit">
                        <p>{isEditable ? "Salvar" : "Criar Vaga"}</p>
                    </S.CreateButton>
                    <S.CancelButton type="button" onClick={onCancel}>
                        <p>Cancelar</p>
                    </S.CancelButton>
                    {onDelete && (
                        <S.DelButton type="button" onClick={onDelete}>
                            <p>Excluir</p>
                        </S.DelButton>
                    )}
                </S.ButtonWrap>
            </S.Group>
        </S.Form>
    );
};
