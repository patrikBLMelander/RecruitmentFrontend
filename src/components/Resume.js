import React from "react";
import styled from "styled-components";
import { CloseO } from "@styled-icons/evil/CloseO";
import Swal from "sweetalert2";
import Slider from "@mui/material/Slider";

function Resume({
  activeCandidate,
  setActiveCandidate,
  presentation,
  candidateState,
  setCandidateState,
  candidateView,
  colorScheme,
  nickName,
}) {
  function removeExperience(experienceInMap) {
    Swal.fire({
      title: "Remove Experience",
      text: "Do you want to remove this experience?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let test = candidateState;
        candidateState.map((candidateStateInMap, cIndex) => {
          if (candidateState[cIndex].id === activeCandidate.id) {
            candidateState[cIndex].experience.map((experienceToCheck) => {
              if (experienceToCheck.id === experienceInMap.id) {
                test[cIndex].experience = [
                  ...candidateState[cIndex].experience.filter(
                    (experience) => experience.id !== experienceInMap.id
                  ),
                ];

                setCandidateState(test);
                setActiveCandidate(test[cIndex]);
              }
              return null;
            });
          }
          return null;
        });
      }
    });
  }
  function removeCompetence(competenceInMap) {
    Swal.fire({
      title: "Remove Conmpetence",
      text: "Do you want to remove this competence?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let test = candidateState;
        candidateState.map((candidateStateInMap, cIndex) => {
          if (candidateState[cIndex].id === activeCandidate.id) {
            candidateState[cIndex].competencies.map((competenciesToCheck) => {
              if (competenciesToCheck.id === competenceInMap.id) {
                test[cIndex].competencies = [
                  ...candidateState[cIndex].competencies.filter(
                    (competencies) => competencies.id !== competenceInMap.id
                  ),
                ];

                setCandidateState(test);
                setActiveCandidate(test[cIndex]);
              }
              return null;
            });
          }
          return null;
        });
      }
    });
  }
  function removeEducation(educationInMap) {
    Swal.fire({
      title: "Remove Education",
      text: "Do you want to remove this education?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let test = candidateState;
        candidateState.map((candidateStateInMap, cIndex) => {
          if (candidateState[cIndex].id === activeCandidate.id) {
            candidateState[cIndex].education.map((educationToCheck) => {
              if (educationToCheck.id === educationInMap.id) {
                test[cIndex].education = [
                  ...candidateState[cIndex].education.filter(
                    (education) => education.id !== educationInMap.id
                  ),
                ];

                setCandidateState(test);
                setActiveCandidate(test[cIndex]);
              }
              return null;
            });
          }
          return null;
        });
      }
    });
  }

  let render;
  if (candidateView === true) {
    render = (
      <OuterContainer key={activeCandidate.id} inputColor={colorScheme}>
        <LeftDiv inputColor={colorScheme}>
          <StyledImg src="https://picsum.photos/150?grayscale"></StyledImg>
          <AboutMe>
            <H5>About me</H5>
            <P>{presentation}</P>
          </AboutMe>
          <Skills>
            <H5>Competencies</H5>
            {activeCandidate.competenciesList.map((competenceInMap) => {
              return (
                <CompetenceDiv key={competenceInMap.id}>
                  <P>
                    {competenceInMap.name} - {competenceInMap.years} years
                  </P>
                  <StyledCloseBtn
                    onClick={() => removeCompetence(competenceInMap)}
                  />
                </CompetenceDiv>
              );
            })}
          </Skills>
        </LeftDiv>
        <RightDiv inputColor={colorScheme}>
          <H3>{nickName[activeCandidate.nickName + 0]}</H3>
          <Experience>
            <H5>Job Experience</H5>
            {activeCandidate.experienceList.map((experienceInMap) => {
              return (
                <div key={experienceInMap.id}>
                  <TitleAndPeriod>
                    <H5>{experienceInMap.title}</H5>
                    <H5>{experienceInMap.period}</H5>
                    <StyledCloseBtn
                      onClick={() => removeExperience(experienceInMap)}
                    />
                  </TitleAndPeriod>
                  <JobDescription>
                    <P>{experienceInMap.description}</P>
                  </JobDescription>
                </div>
              );
            })}
          </Experience>
          <Experience>
            <H5>Education</H5>
            {activeCandidate.educationList.map((educationsInMap) => {
              return (
                <div key={educationsInMap.id}>
                  <TitleAndPeriod>
                    <H5>{educationsInMap.title}</H5>
                    <H5>{educationsInMap.period}</H5>
                    <StyledCloseBtn
                      onClick={() => removeEducation(educationsInMap)}
                    />
                  </TitleAndPeriod>
                  <JobDescription>
                    <P>{educationsInMap.description}</P>
                  </JobDescription>
                </div>
              );
            })}
          </Experience>
          <PersonalityDiv>
            <H5>Personality</H5>
            <TraitDiv>
              <TraitText>
                <H6>Practical</H6>
                <H6>Curius</H6>
              </TraitText>
              <Slider
                key={`openness`}
                disabled
                defaultValue={activeCandidate.personalityList[0].value}
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Impulsive</H6>
                <H6>Organized</H6>
              </TraitText>
              <Slider
                key={`conscintiousness`}
                defaultValue={activeCandidate.personalityList[1].value}
                disabled
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Quiet</H6>
                <H6>Outgoing</H6>
              </TraitText>
              <Slider
                key={`extroversion`}
                defaultValue={activeCandidate.personalityList[2].value}
                disabled
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Critical</H6>
                <H6>Helpful</H6>
              </TraitText>
              <Slider
                key={`agreableness`}
                defaultValue={activeCandidate.personalityList[3].value}
                disabled
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Calm</H6>
                <H6>Anxious</H6>
              </TraitText>
              <Slider
                key={`neuroticism`}
                defaultValue={activeCandidate.personalityList[4].value}
                disabled
              />
            </TraitDiv>
          </PersonalityDiv>
        </RightDiv>
      </OuterContainer>
    );
  } else {
    render = (
      <OuterContainer key={activeCandidate.id} inputColor={colorScheme}>
        <LeftDiv inputColor={colorScheme}>
          <StyledImg src="https://picsum.photos/150?grayscale"></StyledImg>
          <AboutMe>
            <H5>About me</H5>
            <P>{presentation}</P>
          </AboutMe>
          <Skills>
            <H5>Competencies</H5>
            {activeCandidate.competenciesList.map((competenceInMap) => {
              return (
                <CompetenceDiv key={competenceInMap.id}>
                  <P>
                    {competenceInMap.name} - {competenceInMap.years} years
                  </P>
                </CompetenceDiv>
              );
            })}
          </Skills>
        </LeftDiv>
        <RightDiv inputColor={colorScheme}>
          <H3>{nickName[activeCandidate.nickName + 0]}</H3>
          <Experience inputColor={colorScheme}>
            <H5>Job Experience</H5>
            {activeCandidate.experienceList.map((experienceInMap) => {
              return (
                <div key={experienceInMap.id}>
                  <TitleAndPeriod>
                    <H5>{experienceInMap.title}</H5>
                    <H5>{experienceInMap.period}</H5>
                  </TitleAndPeriod>
                  <JobDescription>
                    <P>{experienceInMap.description}</P>
                  </JobDescription>
                </div>
              );
            })}
          </Experience>
          <Experience inputColor={colorScheme}>
            <H5>Education</H5>
            {activeCandidate.educationList.map((educationsInMap) => {
              return (
                <div key={educationsInMap.id}>
                  <TitleAndPeriod>
                    <H5>{educationsInMap.title}</H5>
                    <H5>{educationsInMap.period}</H5>
                  </TitleAndPeriod>
                  <JobDescription>
                    <P>{educationsInMap.description}</P>
                  </JobDescription>
                </div>
              );
            })}
          </Experience>
          <PersonalityDiv>
            <H5>Personality</H5>
            <TraitDiv>
              <TraitText>
                <H6>Practical</H6>
                <H6>Curius</H6>
              </TraitText>
              <Slider
                key={`openness`}
                disabled
                defaultValue={activeCandidate.personalityList[0].value}
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Impulsive</H6>
                <H6>Organized</H6>
              </TraitText>
              <Slider
                key={`conscintiousness`}
                defaultValue={activeCandidate.personalityList[1].value}
                disabled
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Quiet</H6>
                <H6>Outgoing</H6>
              </TraitText>
              <Slider
                key={`extroversion`}
                defaultValue={activeCandidate.personalityList[2].value}
                disabled
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Critical</H6>
                <H6>Helpful</H6>
              </TraitText>
              <Slider
                key={`agreableness`}
                defaultValue={activeCandidate.personalityList[3].value}
                disabled
              />
            </TraitDiv>
            <TraitDiv>
              <TraitText>
                <H6>Calm</H6>
                <H6>Anxious</H6>
              </TraitText>
              <Slider
                key={`neuroticism`}
                defaultValue={activeCandidate.personalityList[4].value}
                disabled
              />
            </TraitDiv>
          </PersonalityDiv>
        </RightDiv>
      </OuterContainer>
    );
  }
  return render;
}

export default Resume;

const OuterContainer = styled.div`
  color: ${(props) => props.inputColor.text};
  font-family: "Roboto", sans-serif;
  text-align: center;
  background-color: ${(props) => props.inputColor.primary};
  width: 100%;
  display: flex;
  border-style: double;
  border-color: ${(props) => props.inputColor.text};
`;
const LeftDiv = styled.div`
  width: 25%;
  border-right: solid;
  border-color: ${(props) => props.inputColor.secondary};
  padding: 5px;
`;
const RightDiv = styled.div`
  padding: 5px;
  width: 75%;
  border-color: ${(props) => props.inputColor.secondary};
`;
const StyledImg = styled.img`
  border-radius: 100%;
  text-align: center;
  margin: 15px;
`;
const AboutMe = styled.div`
  border-top: solid;
  border-bottom: solid;
`;

const Skills = styled.div``;
const Experience = styled.div`
  border-bottom: solid;
`;
const TitleAndPeriod = styled.div`
  display: flex;
  margin-left: 10px;
`;
const JobDescription = styled.div`
  margin: 0px 15px 25px 15px;
  text-align: left;
`;
const CompetenceDiv = styled.div`
  display: flex;
  margin: 0px 15px 25px 15px;
  text-align: left;
`;

const H3 = styled.h3``;
const H5 = styled.h5`
  margin-right: 15px;
  margin-top: 10px;
`;
const H6 = styled.h6`
  margin-right: 15px;
`;
const P = styled.p``;
const TraitDiv = styled.div`
  font-family: "Roboto", sans-serif;
  justify-content: center;
`;

const TraitText = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: space-between;
`;

const StyledCloseBtn = styled(CloseO)`
  display: flex;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
  height: 28px;
  width: 28px;
  color: #fff;
`;
const PersonalityDiv = styled.div`
  font-family: "Roboto", sans-serif;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
`;
