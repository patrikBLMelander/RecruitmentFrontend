import React from "react";
import styled from "styled-components";

function JobOfferPreview({ jobOffer, colorScheme }) {
  let toRender;

  if (jobOffer === "") {
    toRender = <div></div>;
  } else {
    toRender = (
      <Container inputColor={colorScheme}>
        <LeftDiv inputColor={colorScheme}>
          <StyledImg src={jobOffer.imageUrl}></StyledImg>
          <ContactInfo inputColor={colorScheme}>
            <H5>Contact</H5>
            <p>Patrik Melander</p>
            <p>Tel: 0704 01 11 19</p>
            <p>PatrikJMelander@gmail.com</p>
          </ContactInfo>

          <Competencies>
            <H5>Requested Competencies</H5>
            {jobOffer.competenceList.map((competenceInmap) => {
              return (
                <Competence key={competenceInmap.id}>
                  {competenceInmap.name} - {competenceInmap.value} years
                </Competence>
              );
              
            })}
          </Competencies>
        </LeftDiv>
        <RightDiv>
          <Title>{jobOffer.title}</Title>
          <Preview inputColor={colorScheme}>{jobOffer.preview} </Preview>
          <H5>About the Company</H5>
          <p>{jobOffer.companyDescription} </p>
          <H5>Your Role</H5>
          <Role>{jobOffer.aboutRole}</Role>
        </RightDiv>
      </Container>
    );
  }
  return toRender;
}

export default JobOfferPreview;

const Container = styled.div`
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
  margin: 5px;
`;
const RightDiv = styled.div`
  padding: 5px;
  width: 75%;
`;

const Preview = styled.div`
  border-bottom: solid;
  border-color: ${(props) => props.inputColor.secondary};
`;

const ContactInfo = styled.div`
  border-bottom: solid;
  border-top: solid;
  border-color: ${(props) => props.inputColor.secondary};
`;
const Title = styled.h1`
  margin-right: 15px;
  margin-top: 10px;
`;

const H5 = styled.h5`
  margin-right: 15px;
  margin-top: 10px;
`;

const Role = styled.p``;
const Competence = styled.p``;

const Competencies = styled.div``;

const StyledImg = styled.img`
  border-radius: 100%;
  text-align: center;
  margin: 15px;
  max-width: 90%;
  max-height: 90%;
`;
