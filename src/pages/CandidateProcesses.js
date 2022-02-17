import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JobOfferCard from "../components/JobOfferCard";
import axios from "axios";
import { getMyProcesses } from "../API/endpoints";
import { useNavigate } from "react-router-dom";

function CandidateProcesses({
  jobOfferings,
  activeJob,
  setActiveJob,
  setActiveCandidate,
  activeCandidate,
  colorScheme,
  setJobOfferings,
}) {
  const Navigate = useNavigate();
  const [myProcesses, setMyProcesses] = useState([{}]);

  useEffect(() => {
    var candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
    var allJobOffers = JSON.parse(localStorage.getItem("allJobOffers"));
    if (candidateLoggedIn === null) {
      Navigate("/");
    } else {
      setActiveCandidate(candidateLoggedIn);
      setJobOfferings(allJobOffers);
      axios
        .post(
          `${getMyProcesses}`,
          {
            email: `${candidateLoggedIn.email}`,
            test: "test",
          },
          { headers: { Authorization: localStorage.getItem("jwtToken") } }
        )
        .then(function (response) {
          setMyProcesses(response.data);
        }).catch(error => {
          console.error(error)
        });
    }
  }, []);

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
        <H3>
          {activeCandidate.firstName} {activeCandidate.lastName} Here's your
          active processes
        </H3>
        <JobCardDiv>
          {myProcesses?.map((jobOfferingsInMap, index) => {
            return (
              <JobOfferCard
                key={`jobofferCard` + jobOfferingsInMap.id}
                index={index}
                colorScheme={colorScheme}
                jobOffering={jobOfferingsInMap}
                activeCandidate={activeCandidate}
                setActiveCandidate={setActiveCandidate}
                remove={true}
                setMyProcesses={setMyProcesses}
              />
            );
          })}
        </JobCardDiv>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default CandidateProcesses;

const Container = styled.div`
  background-color: ${(props) => props.inputColor.primary};
  color: ${(props) => props.inputColor.text};
  padding-bottom: 5%;
  margin-left: 160px;
  min-height: 90vh;
`;
const JobCardDiv = styled.div`
  margin: 20px auto;
  width: 80%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  @media (max-width: 1200px) {
    flex: 1 1 calc(25% - 20px);
  }
  @media (max-width: 900px) {
    flex: 1 1 calc(33% - 20px);
  }

  @media (max-width: 750px) {
    flex: 1 1 calc(50% - 20px);
  }
  @media (max-width: 550px) {
    flex: 1 1 calc(100% - 20px);
  }
`;

const H3 = styled.h3`
  display: flex;

  margin-left: 50px;
  margin-right: 400px;
  font-family: "Trebuchet MS", sans-serif;
`;
