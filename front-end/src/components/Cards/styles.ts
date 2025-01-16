import styled from "styled-components";

export const Card = styled.article`
  display: flex;

  background-color: #ffffff;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  padding: 1rem;

  width: 600px;
  border-radius: 8px;

  justify-content: space-between;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const CardTitle = styled.h3``;

export const Status = styled.span``;

export const Date = styled.p``;

export const InfosWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 1rem;
`;

export const InfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: #007acc;
  outline: 3px #007acc solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  p {
    color: #ffffff;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
  }
  &:hover {
    background-color: #ffffff;

    p {
      color: #007acc;
    }
  }
`;
