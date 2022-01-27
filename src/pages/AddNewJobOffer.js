import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StyledButton from "../components/StyledButton";
import JobOfferPreview from "../components/Modal/JobOfferPreview";
import Swal from "sweetalert2";
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
  const [validated, setValidated] = useState(false);
  const [activeJobOffer, setActiveJobOffer] = useState("");

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
     ).then(resp => {
     
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
          Swal("Något fick fel!", "Vänligen försök igen", "warning");
        }
      });


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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="g-2 ms-5 me-5 mt-5">
            <Col md>
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
            </Col>
            <Col md>
              <FloatingLabel controlId="locationInputGrid" label="Location">
                <Form.Control required type="Text" placeholder='"Stockholm"' />
                <Form.Control.Feedback type="invalid">
                  Please choose a location.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="dateInputGrid"
                label="Last day to apply"
              >
                <Form.Control required type="Date" placeholder='"Stockholm"' />
                <Form.Control.Feedback type="invalid">
                  Please choose a last day to apply date.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Form.Group className="mb-3 ms-5 me-5" controlId="preview">
            <Form.Label className="ms-3 mt-4">Preview text</Form.Label>
            <Form.Control required as="textarea" rows={3} />
            <Form.Control.Feedback type="invalid">
              This text is the first thing a future co-worker will see, write
              something nice ;)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 ms-5 me-5" controlId="companyDescription">
            <Form.Label className="ms-3 mt-4">
              Description of company
            </Form.Label>
            <Form.Control required as="textarea" rows={3} />
            <Form.Control.Feedback type="invalid">
              Here is the place to write interesting things about our company.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3 ms-5 me-5" controlId="aboutTheRole">
            <Form.Label className="ms-3 mt-4">About the role</Form.Label>
            <Form.Control required as="textarea" rows={3} />
            <Form.Control.Feedback type="invalid">
              Here is the place to write about the role.
            </Form.Control.Feedback>
          </Form.Group>
          <Row className="g-2 ms-5 me-5 mt-5">
            <Col md>
              <FloatingLabel controlId="competence1" label="Competence 1">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="competence2" label="Competence 2">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="competence3" label="Competence 3">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="competence4" label="Competence 4">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId="competence5" label="Competence 5">
                <Form.Control
                  required
                  type="Text"
                  placeholder='"Java utvecklare"'
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="g-2 ms-5 me-5 mt-1 mb-1">
            <Col md>
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
            </Col>
            <Col md>
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
            </Col>
            <Col md>
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
            </Col>
            <Col md>
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
            </Col>
            <Col>
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
            </Col>
          </Row>
          <BtnDiv>
            <StyledButton
              type="submit"
              className="ms-5"
              input={"Publish"}
              colorScheme={colorScheme}
            />
          </BtnDiv>
        </Form>
        <JobOfferPreviewDiv>
          <JobOfferPreview
            jobOffer={activeJobOffer}
            colorScheme={colorScheme}
          />
        </JobOfferPreviewDiv>
      </Container>

      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default AddNewJobOffer;

const Container = styled.div`
  background-color: ${(props) => props.inputColor.primary};
  color: ${(props) => props.inputColor.text};
  align-content: center;
  padding-bottom: 100%;
  padding-left: 163px;
  padding-top: 50px;
  z-index: 0;
  width: 100%;
`;
const JobOfferPreviewDiv = styled.div`
  align-content: center;
  padding-bottom: 100%;
  padding-left: 163px;
  padding-top: 50px;
  z-index: 0;
  width: 100%;
`;
const BtnDiv = styled.div`
  margin-left: 40px;
`;
