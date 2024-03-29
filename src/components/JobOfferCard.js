import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Modal from "react-modal";
import JobOfferPreview from "./Modal/JobOfferPreview";
import StyledButton from "./StyledButton";
import axios from "axios";
import {
  getJobOfferDetails,
  applyForJob,
  removeAppliedJob,
  getMyProcesses,
} from "../API/endpoints";

function JobOfferCard({
  index,
  jobOffering,
  setActiveJob,
  activeCandidate,
  colorScheme,
  remove,
  setMyProcesses
}) {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  let btnText = "Apply";
  if (activeCandidate.isAdmin) {
    btnText = "Candidates";
  }
  if (remove){
    btnText = "Remove";
  }

  function setJobToWorkWith(event) {
    
    if (activeCandidate === "") {
      navigate("/candidate/register");
    }
    if (!activeCandidate.isAdmin) {
      if(remove){
        Swal.fire({
          title: "Remove",
          text: "Do you want to remove this apply?",
          icon: "question",
          showConfirmButton: true,
          confirmButtonText: "Remove",
          showCancelButton: true,
          cancelButtonText: "Not now",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
          .post(
            `${removeAppliedJob}`,
            {
              candidateId: activeCandidate.id,
              jobOfferId:event.id,
            },
            {
              headers: {
                Authorization: localStorage.getItem("jwtToken"),
              },
            }
          )
          .then(resp => {
            const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
            const email =candidateLoggedIn.email;

            axios.post(`${getMyProcesses}`,
            {
              "email": `${candidateLoggedIn.email}`,
              "test": "test"
            },
            {headers: { Authorization: localStorage.getItem("jwtToken") }
          }).then(function (response) {
            setMyProcesses(response.data)
          })
            }).catch(err => {
              console.error(err)
              })
            }
        })

      }else{
        Swal.fire({
          title: "Apply?",
          text: "Do you want to apply for this role, dont forget to update your profile",
          icon: "question",
          showConfirmButton: true,
          confirmButtonText: "Apply",
          showCancelButton: true,
          cancelButtonText: "Not now",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post(`${applyForJob}`,
            { 
              candidateId: activeCandidate.id,
              jobOfferId:`${event.id}`,
            },
            { headers: { Authorization: localStorage.getItem("jwtToken") } }
            ).then(resp => {
            navigate("/candidate/my-page");
            }).catch(error => {
            if(error.response.status===400){
            Swal.fire({
              title: "Not Applied!",
              text: "You have already applied for this role.",
              icon: "warning",
              showConfirmButton: false,
              timer: 3000,
            });
            }else{
            Swal.fire({
              title: "Something whent wrong",
              text: "We seems to have problem with the connection to the server, please try again later",
              icon: "error",
              showConfirmButton: false,
              timer: 3000,
            });
            }
          })
          }
        });
      }
    }
    if (activeCandidate.isAdmin) {
      axios.post(`${getJobOfferDetails}`,
      { 
        jobOfferId:`${event.id}`,
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
      ).then(resp => {
        setActiveJob(resp.data)
        localStorage.setItem("activeJob", JSON.stringify(resp.data));
      }).then(
        navigate("/admin/recruitment-page")
      );
  }



  }
  
  
  return (
    <CardDiv key={index} inputColor={colorScheme}>
      <Image src={jobOffering.imageUrl} onClick={openModal} />
      <CardBody inputColor={colorScheme}>
        <StyledH4 inputColor={colorScheme}>
          {jobOffering.title}
        </StyledH4>
        <PExpire inputColor={colorScheme}>
          Expire: {jobOffering.applyDate}
        </PExpire>
        <BtnContainer>
          <StyledButton
            onClick={() => setJobToWorkWith(jobOffering)}
            variant="primary"
            input={btnText}
            colorScheme={colorScheme}
            isJobOfferCard={true}
          />
        </BtnContainer>
        <CadnidateInfoDiv>
          <PNew show={activeCandidate.isAdmin} inputColor={colorScheme}>
            New: {jobOffering.newCandidates}
          </PNew>
          <PTotal show={activeCandidate.isAdmin} inputColor={colorScheme}>
            Total: {jobOffering.totalCandidates}
          </PTotal>
        </CadnidateInfoDiv>
      </CardBody>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            backgroundColor: 'black',
            position: "absolute",
            width: "70%",
            height: "80%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: "0.7",
          },
        }}
        contentLabel="JobOffer modal"
      >
        <JobOfferPreview
          key={`JobOfferPreview`+jobOffering.id}
          jobOffer={jobOffering}
          colorScheme={colorScheme}
        />
        <BtnModalContainer>
          <StyledButton
            onClick={() => setJobToWorkWith(jobOffering)}
            variant="primary"
            input={btnText}
            colorScheme={colorScheme}
          />
          <StyledButton
            onClick={closeModal}
            variant="primary"
            input={"Close"}
            colorScheme={colorScheme}
          />
        </BtnModalContainer>
      </Modal>
    </CardDiv>
  );
}

export default JobOfferCard;

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    border-radius: 45px;
    box-shadow: 0px 7px 15px ${(props) => props.inputColor.third};
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    min-height: 300px;
    margin: 16px 16px 16px 16px
`;

const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 45px 45px 0px 0px;
`;

const CardBody = styled.div`
  background-color: ${(props) => props.inputColor.secondary};
  border-radius: 0px 0px 45px 45px;
`;

const CadnidateInfoDiv = styled.div`
    display: flex;
    justify-content: center;
    
`;

const PNew = styled.p`
  text-shadow: 1px 1px 2px green;
  font-weight: bold;
  margin-right: 75px;
  color: #43d148;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const PTotal = styled.p`
  margin-left: 75px;
  font-weight: bold;
  color: ${(props) => props.inputColor.fifth};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const PExpire = styled.p`
  font-weight: bold;
  margin-top: 0;
  margin-left: 10px;
  margin-bottom: 0;
  color: ${(props) => props.inputColor.fifth};
`;

const StyledH4 = styled.h4`
  margin-top: 8px;
  margin-left: 10px;
  color: ${(props) => props.inputColor.fifth};
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
