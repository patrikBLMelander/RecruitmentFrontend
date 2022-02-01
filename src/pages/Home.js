import React, {useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import JobOfferCard from "../components/JobOfferCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home({
  jobOfferings,
  setJobOfferings,
  setActiveJob,
  activeJob,
  activeCandidate,
  setActiveCandidate,
  colorScheme,
}) 
{
  const Navigate = useNavigate();
  useEffect(() => {
    var candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
    var activeJobInLocal = JSON.parse(localStorage.getItem("activeJob"));
    if(candidateLoggedIn===null){
      Navigate("/")
    }else{
      setActiveCandidate(candidateLoggedIn);
      if(activeJob===null&&activeJobInLocal!=null){
        setActiveJob(activeJobInLocal);
      }
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
      <Header colorScheme={colorScheme} activeJob={activeJob} />
      <Container inputColor={colorScheme}>
        <H3>
          Welcome {activeCandidate.firstName} {activeCandidate.lastName}
        </H3>
        <JobCardDiv>
          {jobOfferings.map((jobOfferingsInMap, index) => {
            return (
              <JobOfferCard
                key={index}
                index={index}
                colorScheme={colorScheme}
                jobOffering={jobOfferingsInMap}
                setActiveJob={setActiveJob}
                activeCandidate={activeCandidate}
                remove={false}
              />
            );
          })}
        </JobCardDiv>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default Home;

const Container = styled.div`
  background-color: ${(props) => props.inputColor.primary};    
  color: ${(props) => props.inputColor.text};
  padding-bottom: 5%;
  margin-left: 160px;
  min-height: 90vh;
`;

const H3 = styled.h3`
  display: flex;
  margin-left: 50px;
  margin-right: 400px;
  font-family: "Trebuchet MS", sans-serif;
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
