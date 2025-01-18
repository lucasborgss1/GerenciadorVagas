import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";

export const CardCreate: React.FC = () => {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post(
                "https://localhost:7018/api/Vagas/CriarVaga",
                { title },
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
            <Form
                title={title}
                status="Aberta"
                isEditable={true}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                onTitleChange={(e) => setTitle(e.target.value)}
            />
        </>
    );
};
