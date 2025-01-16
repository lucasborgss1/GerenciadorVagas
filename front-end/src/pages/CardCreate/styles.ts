import styled from "styled-components";

export const Form = styled.form`
  background-color: #ffffff;
  border-radius: 10px;
  max-width: 600px;
  display: flex;

  margin: 4rem auto;

  padding: 3rem;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const Title = styled.h2``;

export const Group = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;
export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Select = styled.select`
  &,
  option {
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background-color: #e3f2fd;
    padding: 0.4rem;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #e3f2fd;
  padding: 1rem;

  height: 2rem;
  outline: none;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Span = styled.span`
  margin-right: 2rem;
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;
export const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: transparent;
  outline: 3px #007acc solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  p {
    color: #007acc;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
  }
  &:hover {
    background-color: #007acc;

    p {
      color: #ffffff;
    }
  }
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: transparent;
  outline: 3px #f44336 solid;
  outline-offset: -3px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 400ms;
  p {
    color: #f44336;
    font-weight: 700;
    font-size: 1em;
    transition: 400ms;
  }
  &:hover {
    background-color: #f44336;

    p {
      color: #ffffff;
    }
  }
`;
