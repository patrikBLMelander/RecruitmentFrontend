import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import ApplicantCardModal from "./Modal/ApplicantCardModal";

function CandidateCard({
  index,
  candidate,
  activeJob,
  nickName,
  colorScheme,
}) {

  return (
    <Draggable draggableId={candidate.id} index={index}>
      {(provided, snapshot) => (
        <Container
          inputColor={colorScheme}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
                <ApplicantCardModal
                  key={candidate.id}
                  candidate={candidate}
                  activeJob={activeJob}
                  nickName={nickName}
                  colorScheme={colorScheme}
                />
          
        </Container>
      )}
    </Draggable>
  );
}

export default CandidateCard;

const Container = styled.div`
  border: 1px solid ${(props) => props.inputColor.fifth};
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  color: ${(props) => props.inputColor.text};
  background-color: ${(props) =>
    props.isDragging ? props.inputColor.fourth : props.inputColor.secondary};
`;
