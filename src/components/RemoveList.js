import React, { useEffect, useState } from "react";
import StyledButton from "./StyledButton";
import axios from "axios";
import {
  deleteRecruitmentStep,
} from "../API/endpoints";

function RemoveListBtn({
  activeJob,
  setActiveJob,
  candidatesAmount,
  id,
  colorScheme,
}) {


  const removeList = (event) => {
    axios.post(`${deleteRecruitmentStep}`,
    {
      recruitmentId: id,
      jobOfferId: activeJob.id
    },
    { headers: { Authorization: localStorage.getItem("jwtToken") } }
      ).then(resp => {
      console.log(resp.data);
      setActiveJob(resp.data)
      localStorage.setItem("activeJob", JSON.stringify(resp.data));
      //window.location.reload();
      //Försöker få denna att uppdatera sidan direkt på ett bättre sätt
    }).catch(error => {
      console.error(error)
    })
  }
  const [isBtnDisabled, setisBtnDisabled] = useState(true);
  useEffect(() => {
    if (candidatesAmount > 0) {
      setisBtnDisabled(true); //button remains disabled
    } else {
      setisBtnDisabled(false); //button is enabled
    }
  }, [candidatesAmount]);
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
