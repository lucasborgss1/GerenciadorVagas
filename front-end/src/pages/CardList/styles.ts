import styled from "styled-components";

export const CardsList = styled.section`
  display: flex;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 4rem auto;
  gap: 1rem;
`;

export const AddButton = styled.button`
  margin-left: auto;
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  border-radius: 5px;
  background-color: #3aa856;

  &,
  span,
  svg {
    transition: all 0.3s;
  }

  span {
    transform: translateX(30px);
    color: #fff;
    font-weight: 600;
  }

  svg {
    width: 30px;
    stroke: #fff;
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #34974d;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background: #34974d;

    span {
      color: transparent;
    }

    svg {
      width: 148px;
      transform: translateX(0);
    }

    &:active {
      border: 1px solid #2e8644;
      svg {
        background-color: #2e8644;
      }
    }
  }
`;

export const ButtonText = styled.span``;
