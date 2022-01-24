import React from "react";
import styled from "styled-components";
import logo from "../logoipsum-logo-16.svg";

function Header({ activeJob, colorScheme }) {
  return (
    <Container inputColor={colorScheme}>
      <Img src={logo} alt="React Logo" />
      <H3>{activeJob.title}</H3>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.inputColor.primary};
  color: ${(props) => props.inputColor.text};
  hight: 400;
  padding-top: 16px;
  margin-top: 0;
  overflow: hidden;
  margin-bottom: 0px;
`;

const H3 = styled.h3`
  display: flex;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 400px;
  font-family: "Roboto", sans-serif;
`;

const Img = styled.img`
  display: flex;
  margin-left: 210px;
  margin-right: 400px;
`;
