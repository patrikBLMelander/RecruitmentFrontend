import React, { useEffect, useState } from "react";
import StyledButton from "./StyledButton";

function RemoveListBtn({
  activeJobId,
  jobOfferings,
  setJobOfferings,
  candidates,
  id,
  colorScheme,
}) {
  const removeList = (event) => {
    let test;
    jobOfferings.map((jobOfferingsInMap, index) => {
      if (jobOfferingsInMap.id === activeJobId) {
        jobOfferings[index].recruitmentSteps = [
          ...jobOfferings[index].recruitmentSteps.filter(
            (recruitmentStep) => recruitmentStep.id !== id
          ),
        ];
        test = [...jobOfferings];
      }
      return null;
    });
    setJobOfferings(test);
  };

  const [isBtnDisabled, setisBtnDisabled] = useState(true);
  useEffect(() => {
    if (candidates > 0) {
      setisBtnDisabled(true); //button remains disabled
    } else {
      setisBtnDisabled(false); //button is enabled
    }
  }, [candidates]);
  return (
    <StyledButton
      disabled={isBtnDisabled}
      id={id}
      input={"Remove"}
      onClick={removeList}
      colorScheme={colorScheme}
      isJobOfferCard={true}
    />
  );
}

export default RemoveListBtn;
