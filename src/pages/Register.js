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
import {register} from "../API/endpoints";
import {RegisterCandidateRequest} from "../API/requests";

let counter = 9;
let newId = "candidate-" + counter;


function Registrer({
  setActiveCandidate,
  setCandidateLoggedIn,
  colorScheme,
}) {
  const [validated, setValidated] = useState(false);
  const Navigate = useNavigate();

  function Login() {
    Navigate("/login");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
     } else {
      const nickNameNumber = Math.floor(Math.random() * 120);
      const toSend = {
        nickName: nickNameNumber, 
        firstName: form.firstNameInputGrid.value, 
        lastName: form.lastNameInputGrid.value,
        phone: form.phoneInputGrid.value, 
        email: form.emailInputGrid.value, 
        password: form.passwordInputGrid.value
      }

      axios.post(`${register}`,
        toSend
     ).then(resp => {
     
        if(resp.status === 201){
          Swal.fire({
            icon: "success",
            title: "Created account",
            text: "You are one step closer to your next job, login and fill your resume to increase your chanses",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Login",
          });
          Navigate("/login");
        }
        
      }).catch(error => {
        console.log(error.response.status)
        if(error.response.status === 400){
          Swal.fire({
            icon: "error",
            title: "Email alredy registred",
            text: "This email is already registred in our database, try to login or register whith an other email",
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: "Login",
            cancelButtonText: "Try again",
          }).then((result) => {
            if (result.isConfirmed) {
              Navigate("/login");
            }
          });
        }else{
          Swal("Något fick fel!", "Vänligen försök igen", "warning");
        }
      });
    }
    setValidated(true);
  };

  return (
    <div>
      <Container inputColor={colorScheme}>
        <InnerContainer>
          <StyleH1 inputColor={colorScheme}>Our New Star? </StyleH1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="g-1 ms-5 me-5 mt-5">
              <Col md>
                <FloatingLabel
                  controlId="firstNameInputGrid"
                  label="First name"
                >
                  <Form.Control required type="Text" placeholder='"Patrik"' />
                  <Form.Control.Feedback type="invalid">
                    Everyone have a first name, right?
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="lastNameInputGrid" label="Last name">
                  <Form.Control required type="Text" placeholder='"Melander"' />
                  <Form.Control.Feedback type="invalid">
                    Everyone have a last name, right?
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="phoneInputGrid" label="phone">
                  <Form.Control required type="Text" placeholder='"Melander"' />
                  <Form.Control.Feedback type="invalid">
                    Good to have if we want to conntact you!
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Row className="g-1 ms-5 me-5 mt-5">
              <Col md>
                <FloatingLabel controlId="emailInputGrid" label="email">
                  <Form.Control
                    required
                    type="Email"
                    placeholder='"Melander"'
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
                  />
                  <Form.Control.Feedback type="invalid">
                    This is needed to log in!
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <CheckboxDiv>
              <Form.Group className="mb-3" controlId="termsAndConditions">
                <Form.Check
                  required
                  type="checkbox"
                  label="Terms and conditions"
                />
              </Form.Group>
            </CheckboxDiv>
            <PublishContainer>
              <StyledButton
                type="submit"
                input="Register"
                colorScheme={colorScheme}
              />
              <StyledButton
                onClick={Login}
                input="Login"
                colorScheme={colorScheme}
              />
            </PublishContainer>
          </Form>
        </InnerContainer>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default Registrer;

const Container = styled.div`
    font-family: 'Roboto', sans-serif; 
    position: fixed;
    text-align: center;
    background-color: ${(props) => props.inputColor.primary};
    color: ${(props) => props.inputColor.text};
    height: 100%;
    width: 100%;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
    
`;

const InnerContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

const PublishContainer = styled.div`
  text-align: right;
  display: flex;
  padding: 8px;
  margin-left: 40px;
`;

const StyleH1 = styled.h1`
  color: ${(props) => props.inputColor.fifth};
  font-family: "Roboto", sans-serif;
  margin-top: 8%;
`;

const CheckboxDiv = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  margin-left: 50px;
  margin-top: 10px;
`;
