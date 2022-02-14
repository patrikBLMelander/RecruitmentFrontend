import React from "react";
import styled from "styled-components";

function StyledButton({
  input,
  colorScheme,
  onClick,
  disabled,
  isJobOfferCard,
}) {
  if (isJobOfferCard === undefined) {
    isJobOfferCard = false;
  }

  if (disabled === undefined) {
    disabled = false;
  }

  if (onClick === undefined) {
    onClick = function test() {
      console.log("");
    };
  }

  return (
    <div>
      <StyledBtn
        inputColor={colorScheme}
        onClick={() => onClick()}
        disabled={disabled}
        isJobOfferCard={isJobOfferCard}
      >
        {input}
      </StyledBtn>
    </div>
  );
}

export default StyledButton;

const StyledBtn = styled.button`
  margin: 3px;
  width: 140px;
  height: 45px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: ${(props) => props.inputColor.text};
  background-color: ${(props) =>
    props.isJobOfferCard ? props.inputColor.third : props.inputColor.secondary};
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px
    ${(props) =>
      props.isJobOfferCard
        ? props.inputColor.third
        : props.inputColor.secondary};
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) => props.inputColor.fourth};
    box-shadow: 0px 15px 20px ${(props) => props.inputColor.fourth};
    color: ${(props) => props.inputColor.text};
    transform: translateY(-3px);
  }
`;
