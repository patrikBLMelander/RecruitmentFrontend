import React, { useState, useEffect } from "react";
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
import LightPink from "../testData/colorSchemas/lightPink";
import Teal from "../testData/colorSchemas/teal";
import Purple from "../testData/colorSchemas/purple";
import GreenNature from "../testData/colorSchemas/greenNature";
import axios from "axios";
import {
  createAdmin,
  updatePassword,
  getAllCandidates,
  deleteAdmin,
  updateColor,
  changNicknamePresentaion,
} from "../API/endpoints";


function Settings({
  activeCandidate,
  activeJob,
  setActiveCandidate,
  setActiveJob,
  setNickName,
  setColorscheme,
  colorScheme,
}) {
  const [validated, setValidated] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [allCandidates, setAllCandidates] = useState([{}]);
  console.log(activeCandidate)

  useEffect(() => {
    if(activeCandidate.nickNameChoice==="default"){
      handleAnimalChange()
    }
    else if(activeCandidate.nickNameChoice==="country"){
      handleCountryChange()
    }
    else if(activeCandidate.nickNameChoice==="city"){
      handleCitiesChange()
    }
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

    axios.get(`${getAllCandidates}`, {
  
    }).then(resp => {
      setAllCandidates(resp.data)
  }).catch(error => console.error(error));
  }, []);


  //ADJUST NAME
  const [radioButtonsName, setRadioButtonsName] = useState([
    true,
    false,
    false,
  ]);
  function handleAnimalChange() {
    setRadioButtonsName([true, false, false]);
    setNickName(Animals);

     axios
     .put(
       `${changNicknamePresentaion}`,
       {
          candidateId: `${activeCandidate.id}`,
          nicknameChoice: "default",
       },
       { headers: { Authorization: localStorage.getItem("jwtToken") } }
     )
     .then((response) => {
        const newActiveCandidate = activeCandidate;
        newActiveCandidate.nickNameChoice="default"
        setActiveCandidate(newActiveCandidate);
     })

  }
  function handleCountryChange() {
    setRadioButtonsName([false, true, false]);
    setNickName(Countries);
    axios
    .put(
      `${changNicknamePresentaion}`,
      {
         candidateId: `${activeCandidate.id}`,
         nicknameChoice: "country",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.nickNameChoice="country"
      setActiveCandidate(newActiveCandidate);
    })
  }
  function handleCitiesChange() {
    setRadioButtonsName([false, false, true]);
    setNickName(Cities);
    axios
    .put(
      `${changNicknamePresentaion}`,
      {
         candidateId: `${activeCandidate.id}`,
         nicknameChoice: "city",
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
    )
    .then((response) => {
      const newActiveCandidate = activeCandidate;
      newActiveCandidate.nickNameChoice="city"
      setActiveCandidate(newActiveCandidate);
    })
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

          axios.get(`${getAllCandidates}`, {
  
          }).then(resp => {
            setAllCandidates(resp.data)
        }).catch(error => console.error(error));

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
  //REMOVE ADMIN
  function removeAdmin(indexToRemove) {
    const firstNameToRemove = allCandidates[indexToRemove].firstName;
    const lastNameToRemove = allCandidates[indexToRemove].lastName;
    const idToRemove = allCandidates[indexToRemove].id;
    const NewCandidateState = allCandidates;
    NewCandidateState.splice(indexToRemove, 1);
    setAllCandidates([...NewCandidateState]);
    Swal.fire({
      icon: "success",
      title: "Recruiter removed",
      text: firstNameToRemove + " " + lastNameToRemove + " is removed",
      showConfirmButton: true,
      showDenyButton: false,
      showCancelButton: false,
    });
    axios
    .delete(
      `${deleteAdmin}`,
      {
        data: {
          candidateId: `${idToRemove}`,
          toRemove: `${idToRemove}`,
        },
      },
      {
        headers: {
          Authorization: localStorage.getItem("jwtToken"),
        },
      }
    )

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
                    Teal
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
                    Light Pink
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
                    Purple
                  </label>
                </RadioCol>
              </form>
            </AdjustColorDiv>
            <RemoveRecruiterDiv>
              <H5>Your Recruters</H5>
              <ul>
                {allCandidates.map((candidate, index) => {
                  if (candidate.isAdmin) {
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
