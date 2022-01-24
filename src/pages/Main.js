import React from "react";
import styled from "styled-components";
import JobOfferCard from "../components/JobOfferCard";
import StyledButton from "../components/StyledButton";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {getAllJobOffers} from "../API/endpoints";
import requests from "../API/requests";

function Main({setJobOfferings, jobOfferings, adminLoggedIn, candidateLoggedIn, colorScheme }) {
  const Navigate = useNavigate();
  function login() {
    Navigate("/login");
  }
  function register() {
    Navigate("/candidate/register");
  }




  return (
    <div>
      <Container inputColor={colorScheme}>
        <StyleH1>Karriär</StyleH1>
        <OuterCircleDiv>
          <StyledImg src="https://picsum.photos/id/0/200" />
          <StyledImg src="https://picsum.photos/id/1067/200" />
          <StyledImg src="https://picsum.photos/id/192/200" />
        </OuterCircleDiv>
        <TextUnderPictures>
          <StyleH3>The Melander Company</StyleH3>
          <StyledP>
            Lorem ipsum dolor sit amet, aperiam reprehendunt sit et, veniam
            blandit apeirian id duo. Sea ex purto disputando. Melius utamur
            intellegebat mel ex, vidisse laoreet disputationi ei qui. Graeci
            omnesque detraxit vel ad, pri cibo libris ea. Te inani persius duo,
            vim eu verear signiferumque, vel denique nominavi consequat et.
          </StyledP>
          <BtnContainer>
            <StyledButton
              onClick={register}
              input={"Register"}
              colorScheme={colorScheme}
            />
            <StyledButton
              onClick={login}
              input={"Login"}
              colorScheme={colorScheme}
            />
          </BtnContainer>
        </TextUnderPictures>
        <JobCardDiv>
          {jobOfferings.map((jobOfferingsInMap, index) => {
            return (
              <JobOfferCard
                key={jobOfferingsInMap.id}
                index={index}
                colorScheme={colorScheme}
                jobOfferings={jobOfferings}
                adminLoggedIn={adminLoggedIn}
                candidateLoggedIn={candidateLoggedIn}
              />
            );
          })}
        </JobCardDiv>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default Main;

const Container = styled.div`
    background-color: ${(props) => props.inputColor.primary || "palevioletred"};
    color: ${(props) => props.inputColor.text || "palevioletred"};
    position: fixed;
    text-align: center;
    height: 95%;
    width: 100%;
    z-index: 1,
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 16px;
    padding-bottom: 50px;
    font-family: 'Roboto', sans-serif;
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

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyleH1 = styled.h1`
  margin-top: 10%;
`;

const OuterCircleDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TextUnderPictures = styled.div`
  display: block;
  text-align: center;
`;
const StyledImg = styled.img`
  border-radius: 100%;
  text-align: center;
  margin: 15px;
`;

const StyleH3 = styled.h3`
  margin-top: 8px;
`;

const StyledP = styled.p`
  margin-top: 15px;
  margin-left: 34%;
  margin-right: 34%;
`;
