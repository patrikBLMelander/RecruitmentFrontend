import React, { useState, useEffect } from "react";
import jobOfferingsTestData from "./testData/jobOfferingsTestData";
import Animals from "./testData/animals";
import RecruitmentPage from "./pages/RecruitmentPage";
import Home from "./pages/Home";
import AddNewJobOffer from "./pages/AddNewJobOffer";
import CandidateMyPage from "./pages/CandidateMyPage";
import Settings from "./pages/Settings";
import CandidateProcesses from "./pages/CandidateProcesses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CandidateSearch from "./pages/CandidateSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import candidateTestData from "./testData/candidateTestData";
import Main from "./pages/Main";
import DarkGreen from "./testData/colorSchemas/darkGreen";
import CandidateSettings from "./pages/CandidateSettings";
import axios from 'axios';
import {getAllJobOffers} from "./API/endpoints";

function App() {
  const [jobOfferings, setJobOfferings] = useState([{}]);

  const [activeJob, setActiveJob] = useState({ title: "", id: "" });
  const [activeCandidate, setActiveCandidate] = useState("");
  const [candidateState, setCandidateState] = useState(candidateTestData);
  const [nickName, setNickName] = useState(Animals);
  const [colorScheme, setColorscheme] = useState(DarkGreen);


useEffect(() => {
  axios.get(`${getAllJobOffers}`, {

  }).then(resp => {
    setJobOfferings(resp.data)
}).catch(error => console.error(error));
}, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                colorScheme={colorScheme}
                jobOfferings={jobOfferings}
              />
            }
          />
          <Route
            path="/candidate/register"
            element={
              <Register
                colorScheme={colorScheme}
                setCandidateState={setCandidateState}
                candidateState={candidateState}
                activeCandidate={activeCandidate}
                setActiveCandidate={setActiveCandidate}
              />
            }
          />
          <Route
            path="/candidate/my-page"
            element={
              <CandidateMyPage
                nickName={nickName}
                colorScheme={colorScheme}
                setActiveJob={setActiveJob}
                setCandidateState={setCandidateState}
                candidateState={candidateState}
                activeCandidate={activeCandidate}
                setActiveCandidate={setActiveCandidate}
                jobOfferings={jobOfferings}
                activeJob={activeJob}
              />
            }
          />
          <Route
            path="/candidate/in-process"
            element={
              <CandidateProcesses
                colorScheme={colorScheme}
                setActiveJob={setActiveJob}
                jobOfferings={jobOfferings}
                activeJob={activeJob}
                activeCandidate={activeCandidate}
                setCandidateState={setCandidateState}
                setActiveCandidate={setActiveCandidate}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                colorScheme={colorScheme}
                activeCandidate={activeCandidate}
                jobOfferings={jobOfferings}
                setJobOfferings={setJobOfferings}
                setCandidateState={setCandidateState}
                setActiveCandidate={setActiveCandidate}
                setActiveJob={setActiveJob}
                activeJob={activeJob}
              />
            }
          />
          <Route
            path="/admin/recruitment-page"
            element={
              <RecruitmentPage
                colorScheme={colorScheme}
                nickName={nickName}
                jobOfferings={jobOfferings}
                setJobOfferings={setJobOfferings}
                activeJob={activeJob}
                setActiveJob={setActiveJob}
                activeCandidate={activeCandidate}
                candidateState={candidateState}
                setCandidateState={setCandidateState}
                setActiveCandidate={setActiveCandidate}
              />
            }
          />
          <Route
            path="/admin/add-job-offer-page"
            element={
              <AddNewJobOffer
                colorScheme={colorScheme}
                setActiveJob={setActiveJob}
                jobOfferings={jobOfferings}
                setJobOfferings={setJobOfferings}
                activeJob={activeJob}
                setActiveCandidate={setActiveCandidate}
                activeCandidate={activeCandidate}
              />
            }
          />
          <Route
            path="/admin/candidate-search"
            element={
              <CandidateSearch
                colorScheme={colorScheme}
                activeJob={activeJob}
                setActiveJob={setActiveJob}
                candidateState={candidateState}
                nickName={nickName}
                setActiveCandidate={setActiveCandidate}
                activeCandidate={activeCandidate}
              />
            }
          />
          <Route
            path="/admin/settings"
            element={
              <Settings
                colorScheme={colorScheme}
                setColorscheme={setColorscheme}
                setNickName={setNickName}
                setCandidateState={setCandidateState}
                candidateState={candidateState}
                jobOfferings={jobOfferings}
                activeJob={activeJob}
                setActiveJob={setActiveJob}
                setActiveCandidate={setActiveCandidate}
                activeCandidate={activeCandidate}
              />
            }
          />
          <Route
            path="/candidate/settings"
            element={
              <CandidateSettings
                colorScheme={colorScheme}
                setColorscheme={setColorscheme}
                setNickName={setNickName}
                setCandidateState={setCandidateState}
                candidateState={candidateState}
                jobOfferings={jobOfferings}
                activeJob={activeJob}
                setActiveJob={setActiveJob}
                activeCandidate={activeCandidate}
                setActiveCandidate={setActiveCandidate}
              />
            }
          />
          <Route
            path="/login"
            exect
            element={
              <Login
                colorScheme={colorScheme}
                jobOfferings={jobOfferings}
                activeJob={activeJob}
                setActiveJob={setActiveJob}
                candidateState={candidateState}
                setActiveCandidate={setActiveCandidate}
                activeCandidate={activeCandidate}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
