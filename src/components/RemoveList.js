import React, { useEffect, useState } from "react";
import StyledButton from "./StyledButton";
import Swal from "sweetalert2";
import axios from "axios";
import {
  deleteRecruitmentStep,
} from "../API/endpoints";

function RemoveListBtn({
  activeJob,
  jobOfferings,
  setActiveJob,
  candidates,
  id,
  colorScheme,
}) {


  const removeList = (event) => {
    axios.delete(`${deleteRecruitmentStep}`,
    {
      data:
      {
        recruitmentId: id,
        jobOfferId: activeJob.id
      }

    },
    { headers: { Authorization: localStorage.getItem("jwtToken") } }
   ).then(resp => {
    console.log(resp);
    activeJob.recruitmentList =[...activeJob.recruitmentList.filter(
      (recruitmentStep) => recruitmentStep.id !== id
    )] 
    setActiveJob(...[activeJob])
    //Försöker få denna att uppdatera sidan direkt
  
  }).catch(error => {
    console.error(error)
  })
      }
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
