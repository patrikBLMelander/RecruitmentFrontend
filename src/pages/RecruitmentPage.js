import React, {useEffect} from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import RecruitmentProcessSteps from "../components/RecruitmentProcessSteps";
import AddListBtn from "../components/AddListBtn";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RecruitmentPage({
  jobOfferings,
  setJobOfferings,
  activeJob,
  setActiveJob,
  candidateState,
  setCandidateState,
  activeCandidate,
  setActiveCandidate,
  nickName,
  colorScheme,
}) {

  console.log(activeJob)

  useEffect(() => {
    return()=>{//Lägg kod för att spara till databas
    }
  })
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
        //If you dop outside dropzone
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
          setActiveJob(newActiveJob);
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

          RecToReorder.candidateList.splice(source.index, 1);
          RecToReorder.candidateList.splice(destination.index, 0, draggableId);

          setActiveJob([...activeJob]);
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

        RecFrom.candidateList.splice(source.index, 1);
        RecTo.candidateList.splice(destination.index, 0, draggableId);

        setActiveJob([...activeJob]);
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
              {activeJob.recruitmentList.map(
                    (recruitmentStepsInMap, index) => (
                      <RecruitmentProcessSteps
                        title={recruitmentStepsInMap.title}
                        id={recruitmentStepsInMap.id}
                        candidates={recruitmentStepsInMap.candidateList}
                        key={recruitmentStepsInMap.id}
                        index={index}
                        jobOfferings={jobOfferings}
                        setJobOfferings={setJobOfferings}
                        candidateState={candidateState}
                        setCandidateState={setCandidateState}
                        activeJobId={activeJob.id}
                        nickName={nickName}
                        colorScheme={colorScheme}
                        activeJob={activeJob}
                        setActiveJob={setActiveJob}

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
  position: fixed;
  z-index: 0;
  width: 100%;
  padding-bottom: 100%;
  padding-left: 163px;
`;
