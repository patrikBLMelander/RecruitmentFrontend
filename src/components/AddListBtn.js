import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

let counter = 5;
let newId = "recruitmentStep-" + counter;

function AddListBtn({
  jobOfferings,
  setJobOfferings,
  activeJobId,
  colorScheme,
}) {
  const [value, setvalue] = useState("");

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  const addList = () => {
    counter = counter + 1;
    newId = "recruitmentStep-" + counter;

    let test;
    jobOfferings.map((jobOfferingInMap, index) => {
      if (jobOfferingInMap.id === activeJobId) {
        jobOfferings[index].recruitmentSteps = [
          ...jobOfferingInMap.recruitmentSteps,
          { id: newId, title: value, candidateIds: [] },
        ];
        test = [...jobOfferings];
      }
      return null;
    });
    setJobOfferings(test);
  };

  return (
    <div>
      <Input
        inputColor={colorScheme}
        value={value}
        onChange={handleChange}
        placeholder="Title"
      />
      <br />
      <StyledButton input="Add" colorScheme={colorScheme} onClick={addList} />
    </div>
  );
}

export default AddListBtn;

const Input = styled.input`
  color: ${(props) => props.inputColor.fifth};
  font-size: 1em;
  border: 2px solid ${(props) => props.inputColor.fifth};
  border-radius: 3px;
  margin: 0.5em;
  padding: 0.5em;
`;
