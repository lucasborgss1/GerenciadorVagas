import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
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
                    { title, status },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            accept: "text/plain",
                        },
                    }
                );
                alert("A vaga foi atualizada com sucesso.");
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
            alert("Vaga excluída com sucesso!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao deletar a vaga:", error);
            alert("Erro ao deletar a vaga");
        }
    };

    return (
        <>
            <Header />
            <Form
                title={title}
                status={status}
                createdAt={vagaLocation.created_at}
                updatedAt={vagaLocation.updated_at}
                isEditable={true}
                onSubmit={handleSubmit}
                onCancel={() => navigate("/")}
                onDelete={handleDelButton}
                onTitleChange={(e) => setTitle(e.target.value)}
                onStatusChange={(e) => setStatus(e.target.value)}
            />
        </>
    );
};
