import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import JobOfferPreview from "../components/Modal/JobOfferPreview";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import {
  createNewJobOffer,
  getAllJobOffers,
} from "../API/endpoints";

function AddNewJobOffer({
  setJobOfferings,
  activeCandidate,
  setActiveCandidate,
  activeJob,
  setActiveJob,
  colorScheme,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [validated, setValidated] = useState(false);
  const [activeJobOffer, setActiveJobOffer] = useState("");
  const Navigate = useNavigate();
  const [preview, setPreview]= useState("");

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => { 
    var candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
    var allJobOffers = JSON.parse(localStorage.getItem("allJobOffers"));
    if(candidateLoggedIn===null){
      Navigate("/")
    }else{
      setActiveCandidate(candidateLoggedIn);
    }

  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const competenceListToSend = [
        { 
          name: `${form.competence1.value}`,
          value: `${form.competenceYear1.value}`
        },
        { 
          name: `${form.competence2.value}`,
          value: `${form.competenceYear2.value}`
        },
        { 
          name: `${form.competence3.value}`,
          value: `${form.competenceYear3.value}`
        },
        { 
          name: `${form.competence4.value}`,
          value: `${form.competenceYear4.value}`
        },
        { 
          name: `${form.competence5.value}`,
          value: `${form.competenceYear5.value}`
        },
      ]
      setPreview({
        title:`${form.titleInputGrid.value}`,
          applyDate:`${form.dateInputGrid.value}`,
          preview:`${form.preview.value}`,
          companyDescription:`${form.companyDescription.value}`,
          aboutRole:`${form.aboutTheRole.value}`,
          competenceList:competenceListToSend,
          location:`${form.locationInputGrid.value}`,
          imageUrl:"https://picsum.photos/250?random=1",
      })
      Swal.fire({
        title: "New Job Offer",
        text: "Do you want publish or see a preview?",
        icon: "question",
        showConfirmButton: true,
        confirmButtonText: "Publish",
        showCancelButton: true,
        cancelButtonText: "Preview",
      }).then((result) => {
        if (result.isConfirmed){
          axios.post(`${createNewJobOffer}`,
            { 
              title:`${form.titleInputGrid.value}`,
              applyDate:`${form.dateInputGrid.value}`,
              preview:`${form.preview.value}`,
              companyDescription:`${form.companyDescription.value}`,
              aboutRole:`${form.aboutTheRole.value}`,
              competenceList:competenceListToSend,
              location:`${form.locationInputGrid.value}`,
            },
            { headers: { Authorization: localStorage.getItem("jwtToken") } }
            ).then(resp =>{
            if(resp.status === 201){
              Swal.fire({
                icon: "success",
                title: "Job Offer",
                text: "This job offer is now availible for applying",
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: "OK",
              });
              
              axios.get(`${getAllJobOffers}`, {
              }).then(resp => {
                setJobOfferings(resp.data)
            }).catch(error => console.error(error));
            }      
          }).catch(error => {
            console.log(error.response.status)
            if(error.response.status === 400){
              Swal.fire({
                icon: "error",
                title: "",
                text: "",
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: "Try again",
              })
            }else{
              Swal.fire({
                icon: "error",
                title: "Något fick fel!",
                text: "Vänligen försök igen",
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: "Try again"
              })
            }
          })
        }else{
          setIsOpen(true)
        }
      })
    }  
    setValidated(true);
  };

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
        <HeaderDiv>
          <H3>PUBLISH NEW JOB</H3>
        </HeaderDiv> 
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <FirstRow>
            <FirstRowColumns>
              <FloatingLabel controlId="titleInputGrid" label="Titel">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a title.
                </Form.Control.Feedback>
              </FloatingLabel>
            </FirstRowColumns>
            <FirstRowColumns>
              <FloatingLabel controlId="locationInputGrid" label="Location">
                <Form.Control required type="Text" placeholder='"Stockholm"' />
                <Form.Control.Feedback type="invalid">
                  Please choose a location.
                </Form.Control.Feedback>
              </FloatingLabel>
            </FirstRowColumns>
            <FirstRowColumns>
              <FloatingLabel
                controlId="dateInputGrid"
                label="Last day to apply"
              >
                <Form.Control required type="Date" placeholder='"Stockholm"' />
                <Form.Control.Feedback type="invalid">
                  Please choose a last day to apply date.
                </Form.Control.Feedback>
              </FloatingLabel>
            </FirstRowColumns>
          </FirstRow>
          <FirstRow>
          <BigBox>
          <Form.Group className="mb-3 ms-5 me-5" controlId="preview">
            <Form.Label className="ms-3 mt-4">Preview text</Form.Label>
            <Form.Control required as="textarea" rows={3} />
            <Form.Control.Feedback type="invalid">
              This text is the first thing a future co-worker will see, write
              something nice ;)
            </Form.Control.Feedback>
          </Form.Group>
          </BigBox>
          </FirstRow>
          <FirstRow>
          <BigBox>
          <Form.Group className="mb-3 ms-5 me-5" controlId="companyDescription">
            <Form.Label className="ms-3 mt-4">
              Description of company
            </Form.Label>
            <Form.Control required as="textarea" rows={3} />
            <Form.Control.Feedback type="invalid">
              Here is the place to write interesting things about our company.
            </Form.Control.Feedback>
          </Form.Group>
          </BigBox>
          </FirstRow>
          <FirstRow>
          <BigBox>
          <Form.Group className="mb-3 ms-5 me-5" controlId="aboutTheRole">
            <Form.Label className="ms-3 mt-4">About the role</Form.Label>
            <Form.Control required as="textarea" rows={3} />
            <Form.Control.Feedback type="invalid">
              Here is the place to write about the role.
            </Form.Control.Feedback>
          </Form.Group>
          </BigBox>
          </FirstRow>
          <CompetenceDiv>
            <CompetenceRow>
              <FloatingLabel controlId="competence1" label="Competence 1">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel controlId="competence2" label="Competence 2">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel controlId="competence3" label="Competence 3">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel controlId="competence4" label="Competence 4">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel controlId="competence5" label="Competence 5">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
          </CompetenceDiv>
          <CompetenceDiv className="g-2 ms-5 me-5 mt-1 mb-1">
            <CompetenceRow>
              <FloatingLabel
                controlId="competenceYear1"
                label="Years of experience"
              >
                <Form.Control
                  required
                  type="Number"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel
                controlId="competenceYear2"
                label="Years of experience"
              >
                <Form.Control
                  required
                  type="Number"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel
                controlId="competenceYear3"
                label="Years of experience"
              >
                <Form.Control
                  required
                  type="Number"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel
                controlId="competenceYear4"
                label="Years of experience"
              >
                <Form.Control
                  required
                  type="Number"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
            <CompetenceRow>
              <FloatingLabel
                controlId="competenceYear5"
                label="Years of experience"
              >
                <Form.Control
                  required
                  type="Number"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </CompetenceRow>
          </CompetenceDiv>
          <BtnDiv>
            <StyledButton
              type="submit"
              className="ms-5"
              input={"Publish"}
              colorScheme={colorScheme}
            />
          </BtnDiv>
        </Form>
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
          contentLabel="job-preview"
          inputColor={colorScheme}
        >
          <ModalContainer>
            <JobOfferPreview
              jobOffer={preview}
              colorScheme={colorScheme}
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
export default AddNewJobOffer;

const Container = styled.div`
  background-color: ${(props) => props.inputColor.primary};
  color: ${(props) => props.inputColor.text};
  padding-bottom: 10%;
  padding-left: 163px;
  padding-top: 50px;
  z-index: 0;
  min-width: 90vh;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: center;
`
const FirstRowColumns = styled.div`
  margin: 10px;
  min-width: 38vh
`

const BigBox = styled.div`
  min-width: 129vh
`
const H3 = styled.h3`

`

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
`

const CompetenceDiv = styled.div`
  display: flex;
  justify-content: center;
`
const CompetenceRow = styled.div`
  min-width: 22vh;
  max-width: 22vh;
  margin: 10px;
`

const BtnModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;

const ModalContainer = styled.div`
  margin: 15px;
`;