import React, {useEffect} from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import RecruitmentProcessSteps from "../components/RecruitmentProcessSteps";
import AddListBtn from "../components/AddListBtn";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  moveRecruitmentStep,
  moveCandidate,
} from "../API/endpoints";

function RecruitmentPage({
  activeJob,
  setActiveJob,
  activeCandidate,
  setActiveCandidate,
  nickName,
  setNickName,
  colorScheme,
}) {
  const Navigate = useNavigate();
  useEffect(() => {
    var candidateLoggedIn = JSON.parse(localStorage.getItem("activeUser"));
    var activeJobInLocal = JSON.parse(localStorage.getItem("activeJob"));
    if(candidateLoggedIn===null){
      Navigate("/")
    }else{
      setActiveCandidate(candidateLoggedIn)
      
      if(activeJobInLocal!=null){
        setActiveJob(activeJobInLocal);
      }
    }
  }, []);



  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
        //If you drop outside dropzone
        if (!destination) {
          return null;
        }

        //If you pick up and drop on the same place
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return null;
        }

        //If you drag a list
        if (type === "column") {
          const newActiveJob = activeJob;

          let RecInfoToPutIn;
          newActiveJob.recruitmentList.map((recruitmentStep) => {
            if (recruitmentStep.id === draggableId) {
              RecInfoToPutIn = recruitmentStep;
              return RecInfoToPutIn;
            } else {
              return null;
            }
          });
          newActiveJob.recruitmentList.splice(source.index, 1);
          newActiveJob.recruitmentList.splice(
            destination.index,
            0,
            RecInfoToPutIn
          );
          // setActiveJob(newActiveJob);
          // localStorage.setItem("activeJob", JSON.stringify(newActiveJob));

          axios
            .post(
              `${moveRecruitmentStep}`,
              {
                recruitmentId: `${draggableId}`,
                jobOfferId: `${activeJob.id}`,
                newIndex: destination.index
              },
              { headers: { Authorization: localStorage.getItem("jwtToken") } }
            ).then(resp => {
          
            })
          return null;
        }
        const home = source.droppableId;
        const foreign = destination.droppableId;

        // Om man flyttar kort i samma lista
        if (home === foreign) {
          let RecToReorder;
          activeJob.recruitmentList.map((recruitmentStep) => {
            if (recruitmentStep.id === source.droppableId) {
              RecToReorder = recruitmentStep;
              return RecToReorder;
            } else {
              return null;
            }
          });
          const candidateToMove = RecToReorder.candidateList[source.index]

          RecToReorder.candidateList.splice(source.index, 1);
          RecToReorder.candidateList.splice(destination.index, 0, candidateToMove);

          setActiveJob(activeJob);
          localStorage.setItem("activeJob", JSON.stringify(activeJob));
          return null;
        }
        //Flytta kort mellan listor
        let RecFrom;
        activeJob.recruitmentList.map((recruitmentStep) => {
          if (recruitmentStep.id === source.droppableId) {
            RecFrom = recruitmentStep;
            return RecFrom;
          } else {
            return null;
          }
        });
        let RecTo;
        activeJob.recruitmentList.map((recruitmentStep) => {
          if (recruitmentStep.id === destination.droppableId) {
            RecTo = recruitmentStep;
            return RecTo;
          } else {
            return null;
          }
        });

        const candidateToMove = RecFrom.candidateList[source.index]

        RecFrom.candidateList.splice(source.index, 1);
        RecTo.candidateList.splice(destination.index, 0, candidateToMove);

        setActiveJob(activeJob);
        localStorage.setItem("activeJob", JSON.stringify(activeJob));
        
        axios
        .put(
          `${moveCandidate}`,
          {
            candidateId: `${candidateToMove.id}`,
            oldRecruitmentId: `${RecFrom.id}`,
            newRecruitmentId: `${RecTo.id}`
          },
          { headers: { Authorization: localStorage.getItem("jwtToken") } }
        ).then(resp => {
          })
        return null;
  };

  return (
    <div>
      <Navbar
        colorScheme={colorScheme}
        setActiveJob={setActiveJob}
        setActiveCandidate={setActiveCandidate}
        activeCandidate={activeCandidate}
      />
      <Header activeJob={activeJob} colorScheme={colorScheme} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Container
              inputColor={colorScheme}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Column inputColor={colorScheme}>
              {activeJob.recruitmentList?.map(
                  (recruitmentList, index) => (
                      <RecruitmentProcessSteps            
                        key={recruitmentList.id}
                        index={index}
                        nickName={nickName}
                        colorScheme={colorScheme}
                        activeJob={activeJob}
                        setActiveJob={setActiveJob}
                        recruitmentList={recruitmentList}
                      />
                  )
                )
              }
              {provided.placeholder}
              <AddListBtn
                activeJob={activeJob}
                setActiveJob={setActiveJob}
                colorScheme={colorScheme}
              />
              </Column>
            </Container>
          )}
        </Droppable>
      </DragDropContext>
      <Footer colorScheme={colorScheme} />
    </div>
  );
}

export default RecruitmentPage;

const Container = styled.div`
  background-color: ${(props) => props.inputColor.primary};
  display: flex;
  z-index: 0;
  min-width: 100%;
  min-height:90vh;
  padding-left: 170px;
`;
const Column = styled.div`
  background-color: ${(props) => props.inputColor.primary};
  display: flex;
  z-index: 0;
  height: fit-content;
  min-width: 100%;
  max-width:100%;
  overflow-x: scroll;
  overflow-x: hidden;
  padding-bottom: 70px;
`;
