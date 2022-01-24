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
import endpoints from "../API/endpoints";
import requests from "../API/requests";

function Login({
  candidateState,
  setActiveCandidate,
  setCandidateLoggedIn,
  setAdminLoggedIn,
  candidateLoggedIn,
  adminLoggedIn,
  colorScheme,
}) {
  const [validated, setValidated] = useState(false);
  const Navigate = useNavigate();
  let succeessfulLogin = false;

  if (candidateLoggedIn === true || adminLoggedIn === true) {
    Swal.fire({
      icon: "info",
      title: "Already logged in",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Home",
      cancelButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        Navigate("/home");
      } else {
        setCandidateLoggedIn(false);
        setAdminLoggedIn(false);
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {

      //check CandidateLogin, this will be done properly in backend later
      candidateState.map((candidateInMap) => {
        if (
          candidateInMap.email.toLowerCase() ===
            form.emailInputGrid.value.toLowerCase() &&
          form.passwordInputGrid.value === candidateInMap.password
        ) {
          if (candidateInMap.role === "candidate") {
            setActiveCandidate({
              id: candidateInMap.id,
              nickName: candidateInMap.nickName,
              firstName: candidateInMap.firstName,
              lastName: candidateInMap.lastName,
              presentation: candidateInMap.presentation,
              email: candidateInMap.email,
              password: candidateInMap.password,
              phone: candidateInMap.phone,
              experience: candidateInMap.experience,
              education: candidateInMap.education,
              personality: candidateInMap.personality,
              competencies: candidateInMap.competencies,
            });
            setCandidateLoggedIn(true);
            setAdminLoggedIn(false);
            setValidated(true);
            Navigate("/home");
          } else {
            setCandidateLoggedIn(false);
            setAdminLoggedIn(true);
            setValidated(true);
            Navigate("/home");
          }
          succeessfulLogin = true;
        }
        return null;
      });
      if (!succeessfulLogin) {
        Swal.fire({
          icon: "error",
          title: "Could not log in...",
          text: "Did not find a matching email and password",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Register",
          cancelButtonText: "Try again",
        }).then((result) => {
          if (result.isConfirmed) {
            Navigate("/candidate/register");
          }
        });
      }
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
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
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
