import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import Swal from "sweetalert2";
import axios from "axios";
import {
  addRecruitmentStep,

} from "../API/endpoints";

let counter = 5;

function AddListBtn({
  activeJob,
  setActiveJob,
  colorScheme,
}) {
  const [value, setvalue] = useState("");

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  const addList = () => {
    if(value === undefined || value === "") {
      Swal.fire({
        title: "Emty field",
        text: "You can not add a list without Title",
        icon: "warning",
        showConfirmButton: false,
        timer: 3000,
      });
    }else{
      axios.post(`${addRecruitmentStep}`,
      {
        jobOfferId: activeJob.id,
        title: value
      },
      { headers: { Authorization: localStorage.getItem("jwtToken") } }
      ).then(resp => {
      
      setActiveJob(resp.data)
    
    }).catch(error => {
      console.error(error)
    })
    }
    setvalue("")
    
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
