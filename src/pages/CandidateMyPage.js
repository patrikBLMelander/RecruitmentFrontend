import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getCandidateInfo,
  updatePresentation,
  updatePersonality,
  addEducation,
  addExperience,
  addCompetence,
} from "../API/endpoints";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Swal from "sweetalert2";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import Slider from "@mui/material/Slider";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

function CandidateMyPage({
  activeJob,
  setActiveJob,
  activeCandidate,
  setActiveCandidate,
  setCandidateState,
  candidateState,
  colorScheme,
  nickName,
  setJobOfferings,
}) {
  const Navigate = useNavigate();
  useEffect(() => { 
    var candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
    var allJobOffers = JSON.parse(localStorage.getItem("allJobOffers"));
    if(candidateLoggedIn===null){
      Navigate("/")
    }else{
      setActiveCandidate(candidateLoggedIn);
      setJobOfferings(allJobOffers);
  
      setPresentation(activeCandidate.presentation)
  
      setOpenness(candidateLoggedIn.personalityList[0].value);
      setConscintiousness(candidateLoggedIn.personalityList[1].value);
      setExtroversion(candidateLoggedIn.personalityList[2].value)
      setAgreableness(candidateLoggedIn.personalityList[3].value);
      setNeuroticism (candidateLoggedIn.personalityList[4].value)
    }

  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [presentationValidated, setPresentationValidated] = useState(false);
  const [experienceValidated, setExperienceValidated] = useState(false);
  const [educationValidated, setEducationValidated] = useState(false);
  const [competenceValidated, setCompetenceValidated] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  //Overall
  const [presentation, setPresentation] = useState("");

  const handlePresentationChange = (event) => {
    setPresentation(event.target.value);
  };

  //JobExperience
  const [jobTitle, setJobTitle] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };
  const handleJobStartDateChange = (event) => {
    setJobStartDate(event.target.value);
  };
  const handleJobEndDateChange = (event) => {
    setJobEndDate(event.target.value);
  };
  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  //Education
  const [educationTitle, setEducationTitle] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");
  const [educationDescription, setEducationDescription] = useState("");
  const handleEducationTitleChange = (event) => {
    setEducationTitle(event.target.value);
  };
  const handleEducationStartDateChange = (event) => {
    setEducationStartDate(event.target.value);
  };
  const handleEducationEndDateChange = (event) => {
    setEducationEndDate(event.target.value);
  };
  const handleEducationDescriptionChange = (event) => {
    setEducationDescription(event.target.value);
  };

  //Personality
  const [openness, setOpenness] = useState(50);
  const [conscientiousness, setConscintiousness] = useState(50);
  const [extroversion, setExtroversion] = useState(50)
  const [agreeableness, setAgreableness] = useState(50);
  const [neuroticism, setNeuroticism] = useState(50);
  const handleOpennessChange = (event) => {
    setOpenness(event.target.value);
  };
  const handleConscintiousnessChange = (event) => {
    setConscintiousness(event.target.value);
  };
  const handleExtroversionChange = (event) => {
    setExtroversion(event.target.value);
  };
  const handleAgreablenessChange = (event) => {
    setAgreableness(event.target.value);
  };
  const handleNeuroticismChange = (event) => {
    setNeuroticism(event.target.value);
  };

  //Competence
  const [competenceValue, setCompetenceValue] = useState("");
  const [yearsValue, setYearsValue] = useState("");
  const handleCompetenceValue = (event) => {
    setCompetenceValue(event.target.value);
  };
  const handleYearsValue = (event) => {
    setYearsValue(event.target.value);
  };

  function saveCompetence(event) {
    event.preventDefault();
    if (competenceValue === "" || yearsValue === "") {
      Swal.fire({
        title: "Information missing",
        text: "Pleas fill bouth fields and try again",
        icon: "error",
        showConfirmButton: true,
      });
      setCompetenceValidated(true);
      event.stopPropagation();
    } else {
      axios
        .post(
          `${addCompetence}`,
          {
            userId: `${activeCandidate.id}`,
            name: `${competenceValue}`,
            value: yearsValue
          },
          { headers: { Authorization: localStorage.getItem("jwtToken") } }
        )
        .then((response) => {
          const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
          const email = candidateLoggedIn.email;

        axios
          .post(
            `${getCandidateInfo}`,
            {
              email: `${email}`,
              test: "test",
            },
            { headers: { Authorization: localStorage.getItem("jwtToken") } }
          )
          .then((response) => {
            setActiveCandidate({
              id: response.data.id,
              firstName:response.data.firstName,
              lastName:response.data.lastName,
              nickName: response.data.nickName,
              email: response.data.email,
              presentation: response.data.presentation,
              isAdmin: response.data.isAdmin,
              colorChoice: response.data.colorChoice,
              nickNameChoice: response.data.nickNameChoice,
              roleList: response.data.roleList,
              experienceList: response.data.experienceList,
              educationList: response.data.educationList,
              competenciesList: response.data.competenciesList,
              personalityList: response.data.personalityList,
            });
            localStorage.setItem("activeUser", JSON.stringify(response.data));
          });
      });
      setCompetenceValue("");
      setYearsValue("");

      Swal.fire({
        title: "New Competence added!",
        text: "Your Competence are now updaded and can be seen on the roles you applied for!",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });
      setCompetenceValue("");
      setYearsValue("");
      setCompetenceValidated(false);
    }
  }

  function SavePresentation(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      Swal.fire({
        title: "Presentation missing",
        text: "Update your presentation and try agein",
        icon: "error",
        showConfirmButton: true,
      });
      setPresentationValidated(true);
      event.stopPropagation();
    } else {
      axios
        .put(
          `${updatePresentation}`,
          {
            userId: `${activeCandidate.id}`,
            presentation: `${presentation}`,
          },
          { headers: { Authorization: localStorage.getItem("jwtToken") } }
        )
        .then((response) => {
          setActiveCandidate({
            id: activeCandidate.id,
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            nickName: activeCandidate.nickName,
            email: activeCandidate.email,
            presentation: presentation,
            isAdmin: activeCandidate.isAdmin,
            colorChoice: activeCandidate.colorChoice,
            nickNameChoice: activeCandidate.nickNameChoice,
            roleList: activeCandidate.roleList,
            experienceList: activeCandidate.experienceList,
            educationList: activeCandidate.educationList,
            competenciesList: activeCandidate.competenciesList,
            personalityList: activeCandidate.personalityList,
          });
          localStorage.setItem("activeUser", JSON.stringify(response.data));
        });
      Swal.fire({
        title: "Presentation Saved!",
        text: "Your presentation are now updaded and can be seen on the roles you applied for!",
        icon: "success",
        showConfirmButton: true,
      });
      setPresentationValidated(false);
    }
  }

  function addEmployment(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      Swal.fire({
        title: "Not updated",
        text: "You need to fill all fields",
        icon: "error",
        showConfirmButton: true,
      });
      setExperienceValidated(true);
      event.stopPropagation();
    } else {
      axios
        .post(
          `${addExperience}`,
          {
            userId: `${activeCandidate.id}`,
            title: `${jobTitle}`,
            startDate: `${jobStartDate}`,
            endDate: `${jobEndDate}`,
            description: `${jobDescription}`,
          },
          { headers: { Authorization: localStorage.getItem("jwtToken") } }
        )
        .then((response) => {
          const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
          const email = candidateLoggedIn.email;

          axios
            .post(
              `${getCandidateInfo}`,
              {
                email: `${email}`,
                test: "test",
              },
              { headers: { Authorization: localStorage.getItem("jwtToken") } }
            )
            .then((response) => {
              setActiveCandidate({
                id: response.data.id,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                nickName: response.data.nickName,
                email: response.data.email,
                presentation: response.data.presentation,
                isAdmin: response.data.isAdmin,
                colorChoice: response.data.colorChoice,
                nickNameChoice: response.data.nickNameChoice,
                roleList: response.data.roleList,
                experienceList: response.data.experienceList,
                educationList: response.data.educationList,
                competenciesList: response.data.competenciesList,
                personalityList: response.data.personalityList,
              });
              localStorage.setItem("activeUser", JSON.stringify(response.data));
            });
        });

      Swal.fire({
        title: "New Experience added!",
        text: "Your Experience are now updaded and can be seen on the roles you applied for!",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });

      setJobDescription("");
      setJobTitle("");
      setJobStartDate("");
      setJobEndDate("");
      setExperienceValidated(false);
    }
  }

  function addEducationHandler(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      Swal.fire({
        title: "Not updated",
        text: "You need to fill all fields",
        icon: "error",
        showConfirmButton: true,
      });
      setEducationValidated(true);
      event.stopPropagation();
    } else {
      axios
        .post(
          `${addEducation}`,
          {
            userId: `${activeCandidate.id}`,
            title: `${educationTitle}`,
            startDate: `${educationStartDate}`,
            endDate: `${educationEndDate}`,
            description: `${educationDescription}`,
          },
          { headers: { Authorization: localStorage.getItem("jwtToken") } }
        )
        .then((response) => {
          const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
          const email = candidateLoggedIn.email;

          axios
            .post(
              `${getCandidateInfo}`,
              {
                email: `${email}`,
                test: "test",
              },
              { headers: { Authorization: localStorage.getItem("jwtToken") } }
            )
            .then((response) => {
              setActiveCandidate({
                id: response.data.id,
                firstName:response.data.firstName,
                lastName:response.data.lastName,
                nickName: response.data.nickName,
                email: response.data.email,
                presentation: response.data.presentation,
                isAdmin: response.data.isAdmin,
                colorChoice: response.data.colorChoice,
                nickNameChoice: response.data.nickNameChoice,
                roleList: response.data.roleList,
                experienceList: response.data.experienceList,
                educationList: response.data.educationList,
                competenciesList: response.data.competenciesList,
                personalityList: response.data.personalityList,
              });
              localStorage.setItem("activeUser", JSON.stringify(response.data));
            });
        });

      Swal.fire({
        title: "New Education added!",
        text: "Your Education are now updaded and can be seen on the roles you applied for!",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });

      setEducationDescription("");
      setEducationTitle("");
      setEducationStartDate("");
      setEducationEndDate("");
      setEducationValidated(false);
    }
  }

  function savePersonality(event) {
    event.preventDefault();

    axios
      .put(
        `${updatePersonality}`,
        {
          userId: `${activeCandidate.id}`,
          openness: openness,
          conscientiousness: conscientiousness,
          extroversion: extroversion,
          agreeableness: agreeableness,
          neuroticism: neuroticism,
        },
        { headers: { Authorization: localStorage.getItem("jwtToken") } }
      )
      .then((response) => {
        const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
        const email = candidateLoggedIn.email;

        axios
          .post(
            `${getCandidateInfo}`,
            {
              email: `${email}`,
              test: "test",
            },
            { headers: { Authorization: localStorage.getItem("jwtToken") } }
          )
          .then((response) => {
            setActiveCandidate({
              id: response.data.id,
              firstName:response.data.firstName,
              lastName:response.data.lastName,
              nickName: response.data.nickName,
              email: response.data.email,
              presentation: response.data.presentation,
              isAdmin: response.data.isAdmin,
              colorChoice: response.data.colorChoice,
              nickNameChoice: response.data.nickNameChoice,
              roleList: response.data.roleList,
              experienceList: response.data.experienceList,
              educationList: response.data.educationList,
              competenciesList: response.data.competenciesList,
              personalityList: response.data.personalityList,
            });
            localStorage.setItem("activeUser", JSON.stringify(response.data));
          });
      });

    Swal.fire({
      title: "Personality Saved",
      text: "Not satifyed? Just change it",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
    });
  }

  return (
    <div>
      <Navbar
        colorScheme={colorScheme}
        setActiveJob={setActiveJob}
        setActiveCandidate={setActiveCandidate}
        activeCandidate={activeCandidate}
      />
      <Header activeJob={activeJob} colorScheme={colorScheme} />

      <Container inputColor={colorScheme}>
        <InnerContainer>
          {/* FORM TO PERSONAL DESCRIPTION*/}
          <Form
            noValidate
            validated={presentationValidated}
            onSubmit={SavePresentation}
          >
            <Form.Group className="mb-3 ms-3 me-5" controlId="presentation">
              <H4>Describe your self and why you are so assume!</H4>
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={presentation}
                onChange={handlePresentationChange}
              />
              <Form.Control.Feedback type="invalid">
                This will be the first impression of you, write something nice
                ;)
              </Form.Control.Feedback>
            </Form.Group>
            <StyledButton
              variant="success"
              type="submit"
              input={"Save"}
              colorScheme={colorScheme}
            />
          </Form>
          {/* FORM TO JOB EXPERIENCE */}
          <Form
            noValidate
            validated={experienceValidated}
            onSubmit={addEmployment}
          >
            <H4>Here is the place to add your job experience!</H4>
            <Row className="g-2 ms-3 me-5 mt-1">
              <Col>
                <FloatingLabel controlId="TitleInputGrid" label="Title">
                  <Form.Control
                    required
                    type="Text"
                    placeholder='"Stockholm"'
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    All your experience needs a title
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="startDateInputGrid"
                  label="Started date"
                >
                  <Form.Control
                    required
                    type="Date"
                    value={jobStartDate}
                    onChange={handleJobStartDateChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    All your experience needs a start date
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="endDateInputGrid" label="End date">
                  <Form.Control
                    required
                    type="Date"
                    value={jobEndDate}
                    onChange={handleJobEndDateChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    All your experience needs a end date
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Form.Group className="mb-3 ms-3 me-5" controlId="jobDescription">
              <Form.Label className="ms-3 mt-4">
                Description your job
              </Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={jobDescription}
                onChange={handleJobDescriptionChange}
              />
              <Form.Control.Feedback type="invalid">
                Write about the employment
              </Form.Control.Feedback>
            </Form.Group>
            <StyledButton
              variant="success"
              type="submit"
              input={"Add Job"}
              colorScheme={colorScheme}
            />
          </Form>

          {/* FORM TO EDUCATION */}
          <Form
            noValidate
            validated={educationValidated}
            onSubmit={addEducationHandler}
          >
            <H4>Here is the place to add your education experience!</H4>
            <Row className="g-2 ms-3 me-5 mt-1">
              <Col md>
                <FloatingLabel controlId="TitleInputGrid" label="Title">
                  <Form.Control
                    required
                    type="Text"
                    placeholder='"Stockholm"'
                    value={educationTitle}
                    onChange={handleEducationTitleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    All your education needs a title
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="startDateInputGrid"
                  label="Started date"
                >
                  <Form.Control
                    required
                    type="Date"
                    value={educationStartDate}
                    onChange={handleEducationStartDateChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    All your education needs a start date
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId="endDateInputGrid" label="End date">
                  <Form.Control
                    required
                    type="Date"
                    value={educationEndDate}
                    onChange={handleEducationEndDateChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    All your education needs a end date
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>
            <Form.Group className="mb-3 ms-3 me-5" controlId="jobDescription">
              <Form.Label className="ms-3 mt-4">
                Description your education
              </Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={educationDescription}
                onChange={handleEducationDescriptionChange}
              />
              <Form.Control.Feedback type="invalid">
                Write about the education
              </Form.Control.Feedback>
            </Form.Group>
            <StyledButton
              variant="success"
              type="submit"
              input={"Add Education"}
              colorScheme={colorScheme}
            />
          </Form>

          {/* FORM TO PERSONALITY */}
          <H4>Personality</H4>
          <Form onSubmit={savePersonality}>
            <PersonalityDiv>
              <TraitDiv>
                <TraitText>
                  <H5>Practical</H5>
                  <H5>Curius</H5>
                </TraitText>
                <Slider
                  key={`openness`}
                  value={openness}
                  onChange={handleOpennessChange}
                />
              </TraitDiv>
              <TraitDiv>
                <TraitText>
                  <H5>Impulsive</H5>
                  <H5>Organized</H5>
                </TraitText>
                <Slider
                  key={`conscintiousness`}
                  value={conscientiousness}
                  onChange={handleConscintiousnessChange}
                />
              </TraitDiv>
              <TraitDiv>
                <TraitText>
                  <H5>Quiet</H5>
                  <H5>Outgoing</H5>
                </TraitText>
                <Slider
                  key={`extroversion`}
                  value={extroversion}
                  onChange={handleExtroversionChange}
                />
              </TraitDiv>
              <TraitDiv>
                <TraitText>
                  <H5>Critical</H5>
                  <H5>Helpful</H5>
                </TraitText>
                <Slider
                  key={`agreableness`}
                  value={agreeableness}
                  onChange={handleAgreablenessChange}
                />
              </TraitDiv>
              <TraitDiv>
                <TraitText>
                  <H5>Calm</H5>
                  <H5>Anxious</H5>
                </TraitText>
                <Slider
                  key={`neuroticism`}
                  value={neuroticism}
                  onChange={handleNeuroticismChange}
                />
                <StyledButton
                  type="submit"
                  input={"Save Personality"}
                  colorScheme={colorScheme}
                />
              </TraitDiv>
            </PersonalityDiv>
          </Form>
          <H4>Competence</H4>
          <Form
            noValidate
            validated={competenceValidated}
            onSubmit={saveCompetence}
          >
            <CompetenceDiv>
              <CompetenceCol>
                <FloatingLabel controlId="TitleInputGrid" label="Competence">
                  <Form.Control
                    required
                    type="Text"
                    placeholder='"Stockholm"'
                    value={competenceValue}
                    onChange={handleCompetenceValue}
                  />
                  <Form.Control.Feedback type="invalid">
                    Pleas fill the name of you competence
                  </Form.Control.Feedback>
                </FloatingLabel>
              </CompetenceCol>
              <YearCol>
                <FloatingLabel controlId="TitleInputGrid" label="Years">
                  <Form.Control
                    required
                    type="Number"
                    placeholder='""'
                    value={yearsValue}
                    onChange={handleYearsValue}
                  />
                  <Form.Control.Feedback type="invalid">
                    How many years experience do you have of this?
                  </Form.Control.Feedback>
                </FloatingLabel>
              </YearCol>
              <BtnCol>
                <StyledButton
                  type="submit"
                  input={"Save Competence"}
                  colorScheme={colorScheme}
                />
              </BtnCol>
            </CompetenceDiv>
          </Form>

          <SeperatorDiv />
          <StyledButton
            onClick={openModal}
            input={"My Resume"}
            colorScheme={colorScheme}
          />
        </InnerContainer>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              backgroundColor: colorScheme.primary,
              position: "absolute",
              width: "70%",
              height: "80%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          contentLabel="CV modal"
          inputColor={colorScheme}
        >
          <ModalContainer>
            <Resume
              presentation={activeCandidate.presentation}
              jobExperienceState={activeCandidate}
              candidateView={true}
              activeCandidate={activeCandidate}
              setActiveCandidate={setActiveCandidate}
              candidateState={candidateState}
              setCandidateState={setCandidateState}
              colorScheme={colorScheme}
              nickName={nickName}
            />
          </ModalContainer>
          <BtnModalContainer>
            <StyledButton
              onClick={closeModal}
              input={"Close"}
              colorScheme={colorScheme}
            ></StyledButton>
          </BtnModalContainer>
        </Modal>
      </Container>

      <Footer colorScheme={colorScheme} />
    </div>
  );
}
export default CandidateMyPage;

const ModalContainer = styled.div`
  margin: 15px;
`;

const Container = styled.div`
    font-family: 'Roboto', sans-serif; 
    text-align: center;
    background-color: ${(props) => props.inputColor.primary};
    color: ${(props) => props.inputColor.text};
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow-x: hidden;
    padding-top: 16px;
    margin-left: 160px;
    padding-bottom: 160px;
`;

const InnerContainer = styled.div`
  font-family: "Roboto", sans-serif;
  justify-content: center;
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
`;

const PersonalityDiv = styled.div`
  font-family: "Roboto", sans-serif;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
`;

const TraitDiv = styled.div`
  font-family: "Roboto", sans-serif;
  justify-content: center;
  margin-bottom: 10%;
`;

const TraitText = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: space-between;
`;

const CompetenceDiv = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: center;
`;

const SeperatorDiv = styled.div`
  justify-content: center;
  margin-top: 5%;
  margin-right: 4%;
  margin-bottom: 5%;
  border-style: solid;
  border-color: #b5bcc7;
`;
const H4 = styled.h4`
  font-family: "Roboto", sans-serif;
  margin-top: 7%;
`;
const H5 = styled.h5`
  font-family: "Roboto", sans-serif;
`;

const BtnModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

const CompetenceCol = styled.div`
  width: 55%;
  margin: 10px;
`;
const YearCol = styled.div`
  width: 140px;
  margin: 10px;
`;
const BtnCol = styled.div`
  margin: 10px;
`;
