import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import StyledButton from "../components/StyledButton";
import Swal from "sweetalert2";
import { CloseO } from "@styled-icons/evil/CloseO";
import Animals from "../testData/animals";
import Countries from "../testData/countries";
import Cities from "../testData/capitals";
import Steal from "../testData/colorSchemas/steal";
import DarkBlue from "../testData/colorSchemas/darkBlue";
import Brown from "../testData/colorSchemas/lightPink";
import DarkGreen from "../testData/colorSchemas/darkGreen";
import PinkPurple from "../testData/colorSchemas/pinkPurple";
import GreenNature from "../testData/colorSchemas/greenNature";
import axios from "axios";
import {
  createAdmin,
} from "../API/endpoints";

let counter = 9;

function Settings({
  activeCandidate,
  activeJob,
  setActiveCandidate,
  candidateState,
  setCandidateState,
  setActiveJob,
  setNickName,
  setColorscheme,
  colorScheme,
}) {
  const [validated, setValidated] = useState(false);

  //ADJUST NAME
  const [radioButtonsName, setRadioButtonsName] = useState([
    true,
    false,
    false,
  ]);
  function handleAnimalChange() {
    setRadioButtonsName([true, false, false]);
    setNickName(Animals);
  }
  function handleCountryChange() {
    setRadioButtonsName([false, true, false]);
    setNickName(Countries);
  }
  function handleCitiesChange() {
    setRadioButtonsName([false, false, true]);
    setNickName(Cities);
  }
  //ADJUST COLOR
  const [radioButtonsColor, setRadioButtonsColor] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  function handleColor1Change() {
    setRadioButtonsColor([true, false, false, false, false, false]);
    setColorscheme(Steal);
  }
  function handleColor2Change() {
    setRadioButtonsColor([false, true, false, false, false, false]);
    setColorscheme(DarkBlue);
  }
  function handleColor3Change() {
    setRadioButtonsColor([false, false, true, false, false, false]);
    setColorscheme(GreenNature);
  }
  function handleColor4Change() {
    setRadioButtonsColor([false, false, false, true, false, false]);
    setColorscheme(DarkGreen);
  }
  function handleColor5Change() {
    setRadioButtonsColor([false, false, false, false, true, false]);
    setColorscheme(Brown);
  }
  function handleColor6Change() {
    setRadioButtonsColor([false, false, false, false, false, true]);
    setColorscheme(PinkPurple);
  }
  //CREATE ADMIN
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.stopPropagation();
    } else {
      const toSend = {
        firstName: form.addRecruiterFirstName.value, 
        lastName: form.addRecruiterLastName.value,
        email: form.adminMail.value, 
        password: form.adminDefaultPassword.value
      }
      axios.post(`${createAdmin}`,
        toSend
     ).then(resp => {
     
        if(resp.status === 201){
          Swal.fire({
            icon: "success",
            title: "Recruiter added",
            text:
              "Choosen password is: < " +
              form.adminDefaultPassword.value +
              " > Dont forget to tell the new recruiter to change it",
            showConfirmButton: true,
            showDenyButton: false,
            showCancelButton: false,
          });
        }
      }).catch(error => {
        console.log(error.response.status)
        if(error.response.status === 400){
          Swal.fire({
            icon: "error",
            title: "Email alredy registred",
            text: "This email is already registred in our database, try to an other",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Try again",
          })
        }else{
          Swal("Något fick fel!", "Vänligen försök igen", "warning");
        }
      });
      setValidated(false);
    }
    
  };

  function removeAdmin(indexToRemove) {
    const firstNameToRemove = candidateState[indexToRemove].firstName;
    const lastNameToRemove = candidateState[indexToRemove].lastName;
    const NewCandidateState = candidateState;
    NewCandidateState.splice(indexToRemove, 1);
    setCandidateState([...NewCandidateState]);
    Swal.fire({
      icon: "success",
      title: "Recruiter removed",
      text: firstNameToRemove + " " + lastNameToRemove + " is removed",
      showConfirmButton: true,
      showDenyButton: false,
      showCancelButton: false,
    });
  }

  function changPassword() {

  }

  return (
    <div>
      <Navbar
        colorScheme={colorScheme}
        setActiveJob={setActiveJob}
        setActiveCandidate={setActiveCandidate}
        activeCandidate={activeCandidate}
      />
      <Header colorScheme={colorScheme} activeJob={activeJob} />
      <Container inputColor={colorScheme}>
        <H3>Settings</H3>
        <RadioDiv>
          <LeftDiv>
            <AdjustCandidateNameDiv>
              <H5>How do you want your Candidates to be shown?</H5>
              <form>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option1"
                      checked={radioButtonsName[0]}
                      onChange={handleAnimalChange}
                    />
                    Animals
                  </label>
                </RadioCol>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option2"
                      checked={radioButtonsName[1]}
                      onChange={handleCountryChange}
                    />
                    Countries
                  </label>
                </RadioCol>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option3"
                      checked={radioButtonsName[2]}
                      onChange={handleCitiesChange}
                    />
                    Cities
                  </label>
                </RadioCol>
              </form>
            </AdjustCandidateNameDiv>
            <ChangePasswordDiv>
              <H5>Change Password</H5>
              <Form noValidate validated={validated} onSubmit={changPassword}>
                <ChangePasswordRow>
                  <ChangePasswordCol>
                    <FloatingLabel controlId="oldPassword" label="Old Password">
                      <Form.Control required type="password" placeholder='""' />
                      <Form.Control.Feedback type="invalid">
                        You need your old password to change password!
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </ChangePasswordCol>
                  <ChangePasswordCol>
                    <FloatingLabel controlId="newPassword" label="New Password">
                      <Form.Control required type="password" placeholder='""' />
                      <Form.Control.Feedback type="invalid">
                        Everyone have a last name, right?
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </ChangePasswordCol>
                  <ChangePasswordCol>
                    <FloatingLabel
                      controlId="repeatNewPassword"
                      label="Repeat Password"
                    >
                      <Form.Control required type="password" placeholder='""' />
                      <Form.Control.Feedback type="invalid">
                        Everyone have a last name, right?
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </ChangePasswordCol>
                </ChangePasswordRow>
                <StyledButton
                  type="submit"
                  input="Change Password"
                  colorScheme={colorScheme}
                />
              </Form>
            </ChangePasswordDiv>
          </LeftDiv>
          <RigtDiv>
            <AdjustColorDiv>
              <H5>Choose ColorScheme</H5>
              <form>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option1"
                      checked={radioButtonsColor[0]}
                      onChange={handleColor1Change}
                    />
                    Steal
                  </label>
                </RadioCol>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option2"
                      checked={radioButtonsColor[1]}
                      onChange={handleColor2Change}
                    />
                    Dark Blue
                  </label>
                </RadioCol>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option3"
                      checked={radioButtonsColor[2]}
                      onChange={handleColor3Change}
                    />
                    Green/Nature
                  </label>
                </RadioCol>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option3"
                      checked={radioButtonsColor[3]}
                      onChange={handleColor4Change}
                    />
                    Dark/Green
                  </label>
                </RadioCol>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option3"
                      checked={radioButtonsColor[4]}
                      onChange={handleColor5Change}
                    />
                    Brown
                  </label>
                </RadioCol>
                <RadioCol>
                  <label>
                    <input
                      type="radio"
                      value="option3"
                      checked={radioButtonsColor[5]}
                      onChange={handleColor6Change}
                    />
                    Pink
                  </label>
                </RadioCol>
              </form>
            </AdjustColorDiv>
            <RemoveRecruiterDiv>
              <H5>Your Recruters</H5>
              <ul>
                {candidateState.map((candidate, index) => {
                  if (candidate.id.includes("admin")) {
                    return (
                      <OneAdminDiv key={candidate.id}>
                        <li>
                          {candidate.firstName} {candidate.lastName}
                        </li>
                        <StyledCloseBtn onClick={() => removeAdmin(index)} />
                      </OneAdminDiv>
                    );
                  }
                })}
              </ul>
            </RemoveRecruiterDiv>
          </RigtDiv>
        </RadioDiv>
        <AddRecruiterDiv>
          <H5>Add Recruiter</H5>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <CreateRecruiterRow>
              <CreateRecruiterCol>
                <FloatingLabel
                  controlId="addRecruiterFirstName"
                  label="First name"
                >
                  <Form.Control required type="Text" placeholder='"Patrik"' />
                  <Form.Control.Feedback type="invalid">
                    Everyone have a first name, right?
                  </Form.Control.Feedback>
                </FloatingLabel>
              </CreateRecruiterCol>
              <CreateRecruiterCol>
                <FloatingLabel
                  controlId="addRecruiterLastName"
                  label="Last name"
                >
                  <Form.Control required type="Text" placeholder='"Melander"' />
                  <Form.Control.Feedback type="invalid">
                    Everyone have a last name, right?
                  </Form.Control.Feedback>
                </FloatingLabel>
              </CreateRecruiterCol>
            </CreateRecruiterRow>
            <CreateRecruiterRow>
              <CreateRecruiterCol>
                <FloatingLabel controlId="adminMail" label="email">
                  <Form.Control
                    required
                    type="Email"
                    placeholder='"Melander"'
                  />
                  <Form.Control.Feedback type="invalid">
                    This is needed to log in!
                  </Form.Control.Feedback>
                </FloatingLabel>
              </CreateRecruiterCol>
              <CreateRecruiterCol>
                <FloatingLabel
                  controlId="adminDefaultPassword"
                  label="password"
                >
                  <Form.Control
                    required
                    type="password"
                    placeholder='"Melander"'
                  />
                  <Form.Control.Feedback type="invalid">
                    This is needed to log in!
                  </Form.Control.Feedback>
                </FloatingLabel>
              </CreateRecruiterCol>
            </CreateRecruiterRow>
            <StyledButton
              type="submit"
              input="Add Recruiter"
              colorScheme={colorScheme}
            />
          </Form>
        </AddRecruiterDiv>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default Settings;

const Container = styled.div`
    background-color: ${(props) => props.inputColor.primary};
    color: ${(props) => props.inputColor.text};
    padding-bottom: 5%;
    margin-left 160px;
`;

const AdjustCandidateNameDiv = styled.div`
  border-bottom: 1px solid;
`;
const RadioCol = styled.div`
  margin-left: 50px;
`;

const RadioDiv = styled.div`
  padding-top: 40px;
  display: flex;
`;

const AdjustColorDiv = styled.div`
  border-bottom: 1px solid;
`;
const LeftDiv = styled.div`
  border: 1px solid;
`;
const RigtDiv = styled.div`
  border: 1px solid;
`;

const AddRecruiterDiv = styled.div`
  margin: 100px 50% 10px 10px;
`;
const CreateRecruiterRow = styled.div``;
const CreateRecruiterCol = styled.div`
  margin: 8px;
`;

const RemoveRecruiterDiv = styled.div``;
const OneAdminDiv = styled.div`
  display: flex;
`;
const ChangePasswordDiv = styled.div`
  padding-bottom: 50px;
`;

const ChangePasswordRow = styled.div`
  display: flex;
`;
const ChangePasswordCol = styled.div`
  margin: 10px;
`;

const H3 = styled.h3`
  display: flex;
  margin-left: 50px;
  margin-right: 400px;
  font-family: "Trebuchet MS", sans-serif;
`;

const H5 = styled.h5`
  display: flex;
  margin-left: 50px;
  margin-right: 400px;
  font-family: "Trebuchet MS", sans-serif;
`;

const StyledCloseBtn = styled(CloseO)`
  display: flex;
  margin-right: 50%;
  margin-left: auto;
  cursor: pointer;
  height: 28px;
  width: 28px;
`;
