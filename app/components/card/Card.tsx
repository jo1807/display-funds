import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface ICard {
  name: string;
  setSelectedFund: () => void;
}

export const Card = ({ name, setSelectedFund }: ICard) => {
  return (
    <CardWrapper tabIndex={1} onClick={setSelectedFund}>
      <Title>{name}</Title>
    </CardWrapper>
  );
};

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

const CardWrapper = styled.button`
  all: unset;

  animation: ${fadeIn};

  display: flex;
  flex-wrap: wrap;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  height: 250px;
  background-color: #fcf4ea;
  border-radius: 0.5rem;
  border-width: 10px;
  padding: 10px;

  cursor: pointer;
  justify-content: center;
  align-items: center;

  :focus {
    outline: 4px solid #a0a0a4;

    background-color: #fbfbf8;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  :hover {
    background-color: #ebebe8;
  }

  transition-timing-function: ease-in;
  transition: 0.5s;
`;

export const Title = styled.p`
  color: #5a5c5e;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;
