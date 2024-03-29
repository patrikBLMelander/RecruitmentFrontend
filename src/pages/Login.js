import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import axios from 'axios';
import {login, getCandidateInfo} from "../API/endpoints";
import Animals from "../testData/animals";
import Countries from "../testData/countries";
import Cities from "../testData/capitals";
import Steal from "../testData/colorSchemas/steal";
import DarkBlue from "../testData/colorSchemas/darkBlue";
import LightPink from "../testData/colorSchemas/lightPink";
import Teal from "../testData/colorSchemas/teal";
import Purple from "../testData/colorSchemas/purple";
import GreenNature from "../testData/colorSchemas/greenNature";

function Login({
  setActiveCandidate,
  colorScheme,
  setNickName,
  setColorscheme,
}) {
  const [validated, setValidated] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      axios.post(`${login}?username=`+form.emailInputGrid.value.toLowerCase()+`&password=`+form.passwordInputGrid.value)
      .then((responseFromLogin) => {
        if (responseFromLogin.status !== 200) {
          Swal.fire({
            icon: "error",
            title: "Fel användarnamn eller lösenord",
            text: "Vi hittade tyvärr inget matchande användarnamn eller lösenord",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Try again",
          })
        }else {
          axios.post(`${getCandidateInfo}`,
          {
            "email": `${responseFromLogin.data.username}`,
            "test": "test"
          },
          {headers: { Authorization: responseFromLogin.data.jwtToken}}).then(response => {
            
            setActiveCandidate({
                id:response.data.id,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                nickName:response.data.nickName,
                email:response.data.email,
                presentation:response.data.presentation,
                isAdmin:response.data.isAdmin,
                colorChoice:response.data.colorChoice,
                nickNameChoice:response.data.nickNameChoice,
                roleList:response.data.roleList,
                experienceList:response.data.experienceList,
                educationList:response.data.educationList,
                competenciesList:response.data.competenciesList,
                personalityList:response.data.personalityList,
            })
            if(response.data.colorChoice==="teal"){
              setColorscheme(Teal)
            }else if(response.data.colorChoice==="steal"){
              setColorscheme(Steal)
            }else if(response.data.colorChoice==="darkBlue"){
              setColorscheme(DarkBlue)
            }else if(response.data.colorChoice==="greenNature"){
              setColorscheme(GreenNature)
            }else if(response.data.colorChoice==="lightPink"){
              setColorscheme(LightPink)
            }else if(response.data.colorChoice==="purple"){
              setColorscheme(Purple)
            }
            localStorage.setItem("activeUser", JSON.stringify(response.data));
            localStorage.setItem("jwtToken", responseFromLogin.data.jwtToken)
            if(response.data.isAdmin===false){

              Navigate("/candidate/my-page")
            }else{
              if(response.data.nickNameChoice==="default"){
                setNickName(Animals)
              }else if(response.data.nickNameChoice==="country"){
                setNickName(Countries)
              }else{
                setNickName(Cities)
              }



              Navigate("/home")
            }
          })
        }
    })
    .catch((error) => {
      if (error.response.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Fel användarnamn eller lösenord",
          text: "Vi hittade tyvärr inget matchande användarnamn eller lösenord,",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Try again",
        })
      }else{
        Swal.fire({
          icon: "error",
          title: "Serverfel",
          text: "Tyvärr verkar det inte gå att få kontakt med servern just nu, vänligen försök igen senare",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Try again",
        })
      }

    });

    }

    setValidated(true);
  };

  return (
    <Container inputColor={colorScheme}>
      <InnerContainer>
        <StyleH1>Login!</StyleH1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="g-1 ms-5 me-5 mt-5"></Row>
          <Row className="g-1 ms-5 me-5 mt-5">
            <Col md>
              <FloatingLabel controlId="emailInputGrid" label="email">
                <Form.Control
                  required
                  type="Email"
                  placeholder='"Melander"'
                  autoComplete="email"
                />
                <Form.Control.Feedback type="invalid">
                  This is needed to log in!
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="passwordInputGrid" label="password">
                <Form.Control
                  required
                  type="password"
                  placeholder='"Melander"'
                  autoComplete="new-password"
                />
                <Form.Control.Feedback type="invalid">
                  This is needed to log in!
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <BtnContainer>
            <StyledButton
              type="submit"
              className="ms-5"
              input={"login"}
              colorScheme={colorScheme}
            />
          </BtnContainer>
        </Form>
      </InnerContainer>
      <Footer colorScheme={colorScheme} />
    </Container>
  );
}

export default Login;

const Container = styled.div`
    font-family: 'Roboto', sans-serif; 
    position: fixed;
    text-align: center;
    background-color: ${(props) => props.inputColor.primary};
    color: ${(props) => props.inputColor.fifth};
    height: 100%;
    width: 100%;
    z-index: 1,
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

const BtnContainer = styled.div`
  text-align: right;
  padding: 8px;
  margin-right: 40px;
`;

const StyleH1 = styled.h1`
  margin-top: 6%;
`;
