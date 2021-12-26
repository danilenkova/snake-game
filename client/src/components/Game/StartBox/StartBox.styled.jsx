import styled from "styled-components";
import img from "./snake.jpg";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 600px;
  height: 600px;
  border: 2px solid #000;
  background-color: #fff;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
`;

export const BoxTitle = styled.h2`
  font-size: 48px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StartBtn = styled.button`
  width: 100px;
  height: 30px;
  font-size: 18px;
`;
