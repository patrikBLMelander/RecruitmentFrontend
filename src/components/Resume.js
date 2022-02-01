import React from "react";
import styled from "styled-components";
import { CloseO } from "@styled-icons/evil/CloseO";
import Swal from "sweetalert2";
import Slider from "@mui/material/Slider";
import axios from "axios";
import {
  getCandidateInfo,
  deleteExperience,
  deleteEducation,
  deleteCompetence,
} from "../API/endpoints";

function Resume({
  activeCandidate,
  setActiveCandidate,
  presentation,
  candidateView,
  colorScheme,
  nickName,
}) {

  console.log(activeCandidate)
  function removeExperience(experienceInMap) {
    Swal.fire({
      title: "Remove Experience",
      text: "Do you want to remove this experience?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${deleteExperience}`,
            {
              data: {
                candidateId: `${activeCandidate.id}`,
                toRemove: `${experienceInMap.id}`,
              },
            },
            {
              headers: {
                Authorization: localStorage.getItem("jwtToken"),
              },
            }
          )
          .then((response) => {
            const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
            const email =candidateLoggedIn.email;

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
          })
          .catch((error) => {
            console.error(error.response);
            Swal.fire({
              icon: "error",
              title: "Serverfel",
              text: "Tyvärr verkar det inte gå att få kontakt med servern just nu, vänligen försök igen senare",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Try again",
            });
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
        axios
        .delete(
          `${deleteCompetence}`,
          {
            data: {
              candidateId: `${activeCandidate.id}`,
              toRemove: `${competenceInMap.id}`,
            },
          },
          {
            headers: {
              Authorization: localStorage.getItem("jwtToken"),
            },
          }
        )
        .then((response) => {
          const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
          const email =candidateLoggedIn.email;

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
        })
        .catch((error) => {
          console.error(error.response);
          Swal.fire({
            icon: "error",
            title: "Serverfel",
            text: "Tyvärr verkar det inte gå att få kontakt med servern just nu, vänligen försök igen senare",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: "Try again",
          });
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
        axios
          .delete(
            `${deleteEducation}`,
            {
              data: {
                candidateId: `${activeCandidate.id}`,
                toRemove: `${educationInMap.id}`,
              },
            },
            {
              headers: {
                Authorization: localStorage.getItem("jwtToken"),
              },
            }
          )
          .then((response) => {
            const candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
            const email =candidateLoggedIn.email;

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
          })
          .catch((error) => {
            console.error(error.response);
            Swal.fire({
              icon: "error",
              title: "Serverfel",
              text: "Tyvärr verkar det inte gå att få kontakt med servern just nu, vänligen försök igen senare",
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: "Try again",
            });
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
                    {competenceInMap.name} - {competenceInMap.value} years
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
          <H3>{activeCandidate.firstName} {activeCandidate.lastName}</H3>
          <Experience>
            <H5>Job Experience</H5>
            {activeCandidate.experienceList.map((experienceInMap) => {
              return (
                <div key={experienceInMap.id}>
                  <TitleAndPeriod>
                    <H5>{experienceInMap.title}</H5>
                    <H5>
                      {experienceInMap.startDate +
                        " to " +
                        experienceInMap.endDate}
                    </H5>
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
                    <H5>
                      {educationsInMap.startDate +
                        " to " +
                        educationsInMap.endDate}
                    </H5>
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
                    {competenceInMap.name} - {competenceInMap.value} years
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
                    <H5>
                      {experienceInMap.startDate +
                        " to " +
                        experienceInMap.endDate}
                    </H5>
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
                    <H5>
                      {educationsInMap.startDate +
                        " to " +
                        educationsInMap.endDate}
                    </H5>
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
