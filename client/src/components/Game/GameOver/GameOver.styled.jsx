import styled from "styled-components";

export const GameOverBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 600px;
  height: 600px;
  border: 2px solid #000;
  background-color: #444444;
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 48px;
  margin-bottom: 10px;
`;

export const Exit = styled.button`
  width: 60px;
  height: 30px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const GameScore = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Restart = styled.button`
  width: 150px;
  height: 30px;
  font-size: 18px;
  margin-bottom: 10px;
`;
