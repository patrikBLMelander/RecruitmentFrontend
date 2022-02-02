import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import StyledButton from "../components/StyledButton";
import ApplicantCardModal from "../components/Modal/ApplicantCardModal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  getAllCandidates,
} from "../API/endpoints";

function CandidateSearch({
  activeJob,
  activeCandidate,
  setActiveCandidate,
  setActiveJob,
  nickName,
  colorScheme,
}) {
  const Navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [allCandidates, setAllCandidates] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    var candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
    if(candidateLoggedIn===null){
      Navigate("/")
    }else{
      setActiveCandidate(candidateLoggedIn);
      axios.get(`${getAllCandidates}`,
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
        ).then(resp => {
      setAllCandidates(resp.data)
      })
  }    
  }, []);

  function searchForCompetence(event) {//Lös detta i backend i framtiden så man inte får en lista på alla kandidater
    event.preventDefault();
    if (event.currentTarget.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setSearchResult([]);
      let noMatch = true;
      const CompetenceToSearch = event.currentTarget.competence.value;
      const YearsToSearch = event.currentTarget.years.value;
      let newSearchResult = [];
      allCandidates.map((candidateInMap, index) => {
        if(candidateInMap.competenciesList.length>=1){
          candidateInMap.competenciesList.map((competenceInMap) => {
            if (
              competenceInMap.name.toLowerCase().includes(CompetenceToSearch.toLowerCase()) &&
              competenceInMap.value >= YearsToSearch
            ) {
              newSearchResult = [...newSearchResult, allCandidates[index]];
              setSearchResult(newSearchResult);
              noMatch=false
            }
          });
        }else{console.log("no experience")}
      });
      if(noMatch) {
        Swal.fire({
          icon: "error",
          title: "No Candidate found",
          text: "Did not find any candidate whith that searching criteria, try to lower the years of exprerience or search for an other competence",
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: "Ok",
        })
      }
    }
    setValidated(true);
  }


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
        
          <SearchDiv>
          <H3>Candidate Search</H3>
            <Form
              noValidate
              validated={validated}
              onSubmit={searchForCompetence}
            >
              <InputDiv>
                <FloatingLabel controlId="competence" label="Competence">
                  <Form.Control required type="text" placeholder='"Java"' />
                  <Form.Control.Feedback type="invalid">
                    This field can not be empty
                  </Form.Control.Feedback>
                </FloatingLabel>
                </InputDiv>
                <InputDiv>
                <FloatingLabel controlId="years" label="Years">
                  <Form.Control required type="number" placeholder='"Java"' />
                  <Form.Control.Feedback type="invalid">
                    This field can not be empty
                  </Form.Control.Feedback>
                </FloatingLabel>
                </InputDiv>
              <InputDiv>
              <StyledButton
                type="submit"
                input="Search"
                colorScheme={colorScheme}
              />
              </InputDiv>
            </Form>
          </SearchDiv>
          <ListOfResultDiv>
          {searchResult.map((candidate, index) => {
            return (
              <SearchedCandidateDiv inputColor={colorScheme} >
                <ApplicantCardModal
                  key={candidate.id}
                  candidate={candidate}
                  activeJob={activeJob}
                  nickName={nickName}
                  colorScheme={colorScheme}
                />
              </SearchedCandidateDiv>
            );
          })}
          </ListOfResultDiv>
      </Container>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default CandidateSearch;


const Container = styled.div`
    min-width: 90vh;
    min-height: 90vh;
    background-color: ${(props) => props.inputColor.primary};
    color: ${(props) => props.inputColor.text};
    padding-bottom: 5%;
    margin-left: 160px;
    padding-left: 10px;
    
`;

const SearchDiv = styled.div`
  padding-bottom: 50px;
  
`;

const InputDiv = styled.div`
  display: block;
  width: 30vh;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 6px;
  border: 1px solid var(--input-border);
  background: var(--input-background);
  transition: border .3s ease;
`;
const StyledBtnDiv = styled.div`
  margin-top: 10px;
`;

const ListOfResultDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const H3 = styled.h3`
  display: flex;
  margin-left: 10px;
  font-family: "Trebuchet MS", sans-serif;
`;

const SearchedCandidateDiv = styled.div` 
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.inputColor.fifth};
  border-radius: 2px;
  padding: 8px;
  margin: 8px 8px 8px 8px;
  cursor: pointer;
  color: ${(props) => props.inputColor.text};
  background-color: ${(props) =>
    props.isDragging ? props.inputColor.fourth : props.inputColor.secondary};
`



