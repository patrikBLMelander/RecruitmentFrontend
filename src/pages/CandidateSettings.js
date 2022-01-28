import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import StyledButton from "../components/StyledButton";
import Swal from "sweetalert2";
import Steal from "../testData/colorSchemas/steal";
import DarkBlue from "../testData/colorSchemas/darkBlue";
import LightPink from "../testData/colorSchemas/lightPink";
import Teal from "../testData/colorSchemas/teal";
import Purple from "../testData/colorSchemas/purple";
import GreenNature from "../testData/colorSchemas/greenNature";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  updatePassword,
  deleteCandidate,
  updateColor,
  getAllCandidates,
} from "../API/endpoints";

function CandidateSettings({
  setActiveCandidate,
  activeJob,
  candidateState,
  setCandidateState,
  setActiveJob,
  setColorscheme,
  colorScheme,
  activeCandidate,
}) {
  const [passwordValidation, setPasswordValidation] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    if(activeCandidate.colorChoice==="teal"){
      handleColor4Change()
    }else if(activeCandidate.colorChoice==="steal"){
      handleColor1Change()
    }else if(activeCandidate.colorChoice==="darkBlue"){
      handleColor2Change()
    }else if(activeCandidate.colorChoice==="greenNature"){
      handleColor3Change()
    }else if(activeCandidate.colorChoice==="lightPink"){
      handleColor5Change()
    }else if(activeCandidate.colorChoice==="purple"){
      handleColor6Change()
    }
  }, []);


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
    axios
    .put(
      `${updateColor}`,
      {
         candidateId: `${activeCandidate.id}`,
         colorChoice: "steal",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.colorChoice="steal"
      setActiveCandidate(newActiveCandidate);
    })
    
  }
  function handleColor2Change() {
    setRadioButtonsColor([false, true, false, false, false, false]);
    setColorscheme(DarkBlue);
    axios
    .put(
      `${updateColor}`,
      {
         candidateId: `${activeCandidate.id}`,
         colorChoice: "darkBlue",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.colorChoice="darkBlue"
      setActiveCandidate(newActiveCandidate);
    })
  }
  function handleColor3Change() {
    setRadioButtonsColor([false, false, true, false, false, false]);
    setColorscheme(GreenNature);
    axios
    .put(
      `${updateColor}`,
      {
         candidateId: `${activeCandidate.id}`,
         colorChoice: "greenNature",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.colorChoice="greenNature"
      setActiveCandidate(newActiveCandidate);
    })
  }
  function handleColor4Change() {
    setRadioButtonsColor([false, false, false, true, false, false]);
    setColorscheme(Teal);
    axios
    .put(
      `${updateColor}`,
      {
         candidateId: `${activeCandidate.id}`,
         colorChoice: "teal",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.colorChoice="teal"
      setActiveCandidate(newActiveCandidate);
    })
  }
  function handleColor5Change() {
    setRadioButtonsColor([false, false, false, false, true, false]);
    setColorscheme(LightPink);
    axios
    .put(
      `${updateColor}`,
      {
         candidateId: `${activeCandidate.id}`,
         colorChoice: "lightPink",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.colorChoice="lightPink"
      setActiveCandidate(newActiveCandidate);
    })
  }
  function handleColor6Change() {
    setRadioButtonsColor([false, false, false, false, false, true]);
    setColorscheme(Purple);
    axios
    .put(
      `${updateColor}`,
      {
         candidateId: `${activeCandidate.id}`,
         colorChoice: "purple",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.colorChoice="purple"
      setActiveCandidate(newActiveCandidate);
    })
  }

  function RemoveMe() {
    Swal.fire({
        icon: "question",
        title: "Delete you account?",
        text: "This action will remove you fom out database and you will no longer be showen in our recruitment processes",
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          axios
          .delete(
            `${deleteCandidate}`,
            {
              data: {
                candidateId: `${activeCandidate.id}`,
                toRemove: `${activeCandidate.id}`,
              },
            },
            {
              headers: {
                Authorization: localStorage.getItem("jwtToken"),
              },
            }
          ).then((result) => {
            const firstNameToRemove = activeCandidate.firstName;
            const lastNameToRemove = activeCandidate.lastName;
            const NewCandidateState = candidateState;
            let IndexToRemove;
        
            candidateState.map((candidateInMap, index) =>{
                if (candidateInMap.id===activeCandidate.id){
                    IndexToRemove=index
                    NewCandidateState.splice(IndexToRemove);
                    setCandidateState([...NewCandidateState]);
                    Swal.fire({
                      icon: "success",
                      title: "Account deleted",
                      text: firstNameToRemove + " " + lastNameToRemove + " You have Successfully deleted your account",
                      showConfirmButton: true,
                      showDenyButton: false,
                      showCancelButton: false,
                    })
                }
            })

          Navigate("/");



          })

        }
      });

  }

  function changPassword(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {


      setPasswordValidation(true)
      event.stopPropagation();
     } else {
      axios
      .put(
        `${updatePassword}`,
        {
          userId: `${activeCandidate.id}`,
          newPassword: `${form.newPassword.value}`,
          oldPassword:`${form.oldPassword.value}`
        },
        { headers: { Authorization: localStorage.getItem("jwtToken") } }
      ).then(response =>{
        if(response.status===202){
          Swal.fire({
            icon: "success",
            title: "Lösenord ändrat!",
            text:  "Ditt lösenord är nu ändrat.",
            showConfirmButton: true,
            showDenyButton: false,
            showCancelButton: false,
          });

        }
        console.log(response);
      }).catch(error =>{
        if(error.response.status===400){
          Swal.fire({
            icon: "error",
            title: "Old Password and user password dont match",
            text:  "",
            showConfirmButton: true,
            showDenyButton: false,
            showCancelButton: false,
          });
        }else{
          Swal.fire({
            icon: "error",
            title: "Something went wrong, please try again later",
            text:  "",
            showConfirmButton: true,
            showDenyButton: false,
            showCancelButton: false,
          });

        }

      })

     }
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
            <ChangePasswordDiv>
              <H5>Change Password</H5>
              <Form noValidate validated={passwordValidation} onSubmit={changPassword}>
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
                      You need a new password to change password!
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
                        You need to validate the new password
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
        </RadioDiv>
        <RemoveMeDiv>
        <StyledButton
                  onClick={RemoveMe}
                  input="Remove Me"
                  colorScheme={colorScheme}
                />
        </RemoveMeDiv>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default CandidateSettings;

const Container = styled.div`
position: fixed;
    background-color: ${(props) => props.inputColor.primary};
    color: ${(props) => props.inputColor.text};
    height: 100%;
    padding-bottom: 5%;
    margin-left 160px;
`;

const RadioCol = styled.div`
  margin-left: 50px;
`;

const RadioDiv = styled.div`
  padding-top: 40px;
  display: flex;
`;

const AdjustColorDiv = styled.div`
  border: 1px solid;
`;
const LeftDiv = styled.div`
  border: 1px solid;
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

const RemoveMeDiv = styled.div`
  margin: 10px;
`;
