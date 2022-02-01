import React, { useState, useEffect } from "react";
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
import {Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import DarkGreen from "./testData/colorSchemas/teal";
import CandidateSettings from "./pages/CandidateSettings";
import axios from 'axios';
import {getAllJobOffers} from "./API/endpoints";
import { useNavigate } from "react-router-dom";

function App() {
  const Navigate = useNavigate();
  const [jobOfferings, setJobOfferings] = useState([{}]);
  const [activeJob, setActiveJob] = useState({ title: "", id: "" });
  const [activeCandidate, setActiveCandidate] = useState({isAdmin:false, id:""});
  const [nickName, setNickName] = useState(Animals);
  const [colorScheme, setColorscheme] = useState(DarkGreen);

useEffect(() => {
    axios.get(`${getAllJobOffers}`, {

    }).then(resp => {
      setJobOfferings(resp.data)
      localStorage.setItem("allJobOffers", JSON.stringify(resp.data));
  }).catch(error => console.error(error));
}, []);


  return (

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                colorScheme={colorScheme}
                jobOfferings={jobOfferings}
                activeCandidate={activeCandidate}
              />
            }
          />
          <Route
            path="/candidate/register"
            element={
              <Register
                colorScheme={colorScheme}
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
                activeCandidate={activeCandidate}
                setActiveCandidate={setActiveCandidate}
                jobOfferings={jobOfferings}
                activeJob={activeJob}
                setJobOfferings={setJobOfferings}
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
                setColorscheme={setColorscheme}
                jobOfferings={jobOfferings}
                activeJob={activeJob}
                setActiveJob={setActiveJob}
                setActiveCandidate={setActiveCandidate}
                activeCandidate={activeCandidate}
                setNickName={setNickName}
              />
            }
          />
        </Routes>
      </div>
  );
}
export default App;
