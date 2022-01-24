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
  adminLoggedIn,
  candidateLoggedIn,
  setAdminLoggedIn,
  setCandidateLoggedIn,
  nickName,
  colorScheme,
}) {

  useEffect(() => {
    return()=>{//Lägg kod för att spara till databas
    }
  })
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    jobOfferings.map((jobOfferingInMap, index) => {
      if (jobOfferingInMap.id === activeJob.id) {
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
          const newJobOfferings = [].concat(jobOfferings);

          let RecInfoToPutIn;
          newJobOfferings[index].recruitmentSteps.map((recruitmentStep) => {
            if (recruitmentStep.id === draggableId) {
              RecInfoToPutIn = recruitmentStep;
              return RecInfoToPutIn;
            } else {
              return null;
            }
          });

          newJobOfferings[index].recruitmentSteps.splice(source.index, 1);
          newJobOfferings[index].recruitmentSteps.splice(
            destination.index,
            0,
            RecInfoToPutIn
          );

          setJobOfferings([...newJobOfferings]);

          return null;
        }

        const home = source.droppableId;
        const foreign = destination.droppableId;

        // Om man flyttar kort i samma lista
        if (home === foreign) {
          let RecToReorder;
          jobOfferings[index].recruitmentSteps.map((recruitmentStep) => {
            if (recruitmentStep.id === source.droppableId) {
              RecToReorder = recruitmentStep;
              return RecToReorder;
            } else {
              return null;
            }
          });

          RecToReorder.candidateIds.splice(source.index, 1);
          RecToReorder.candidateIds.splice(destination.index, 0, draggableId);

          setJobOfferings([...jobOfferings]);
          return null;
        }
        //Flytta kort mellan listor
        let RecFrom;
        jobOfferings[index].recruitmentSteps.map((recruitmentStep) => {
          if (recruitmentStep.id === source.droppableId) {
            RecFrom = recruitmentStep;
            return RecFrom;
          } else {
            return null;
          }
        });
        let RecTo;
        jobOfferings[index].recruitmentSteps.map((recruitmentStep) => {
          if (recruitmentStep.id === destination.droppableId) {
            RecTo = recruitmentStep;
            return RecTo;
          } else {
            return null;
          }
        });

        RecFrom.candidateIds.splice(source.index, 1);
        RecTo.candidateIds.splice(destination.index, 0, draggableId);

        setJobOfferings([...jobOfferings]);
        return null;
      }
      return null;
    });

    return null;
  };

  return (
    <div>
      <Navbar
        setAdminLoggedIn={setAdminLoggedIn}
        setCandidateLoggedIn={setCandidateLoggedIn}
        adminLoggedIn={adminLoggedIn}
        candidateLoggedIn={candidateLoggedIn}
        setActiveJob={setActiveJob}
        colorScheme={colorScheme}
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
              {jobOfferings.map((jobOfferingsInMap, index) => {
                if (jobOfferingsInMap.id === activeJob.id) {
                  return jobOfferingsInMap.recruitmentSteps.map(
                    (recruitmentStepsInMap, index) => (
                      <RecruitmentProcessSteps
                        title={recruitmentStepsInMap.title}
                        id={recruitmentStepsInMap.id}
                        candidates={recruitmentStepsInMap.candidateIds}
                        key={recruitmentStepsInMap.id}
                        index={index}
                        jobOfferings={jobOfferings}
                        setJobOfferings={setJobOfferings}
                        candidateState={candidateState}
                        setCandidateState={setCandidateState}
                        activeJobId={activeJob.id}
                        nickName={nickName}
                        colorScheme={colorScheme}
                      />
                    )
                  );
                }
                return null;
              })}

              {provided.placeholder}
              <AddListBtn
                jobOfferings={jobOfferings}
                setJobOfferings={setJobOfferings}
                activeJobId={activeJob.id}
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
