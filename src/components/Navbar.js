import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Home } from "@styled-icons/boxicons-regular/Home";
import { LogOutCircle } from "@styled-icons/boxicons-regular/LogOutCircle";
import { PersonSearch } from "@styled-icons/material/PersonSearch";
import { BearSmile } from "@styled-icons/remix-fill/BearSmile";
import { Settings } from "@styled-icons/evaicons-solid/Settings";
import { PeopleTeamAdd } from "@styled-icons/fluentui-system-regular/PeopleTeamAdd";
import { Briefcase } from "@styled-icons/boxicons-solid/Briefcase";
import { AddressCard } from "@styled-icons/fa-regular/AddressCard";
import { useNavigate } from "react-router-dom";

function Navbar({
  activeCandidate,
  setActiveCandidate,
  setActiveJob,
  colorScheme,
}) {
  const Navigate = useNavigate();

  function logOut() {
    localStorage.clear();
    setActiveCandidate("");
    setActiveJob("");
    Navigate("/");
    
  }

  let render;

  if (activeCandidate.isAdmin) {
    render = (
      <Container inputColor={colorScheme}>
        <Link to="/home">
          <h1>
            <StyledHomeBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <Link to="/admin/recruitment-page">
          <h1>
            <StyledBearSmileBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <Link to="/admin/candidate-search">
          <h1>
            <StyledPersonSearchBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <Link to="/admin/add-job-offer-page">
          <h1>
            <StyledPeopleTeamAddBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <Link to="/admin/settings">
          <h1>
            <StyledSettingsBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <a onClick={logOut}>
          <h1>
            <StyledLogOutCircleBtn inputColor={colorScheme} />
          </h1>
        </a>
      </Container>
    );
  } else {
    render = (
      <Container inputColor={colorScheme}>
        <Link to="/home">
          <h1>
            <StyledHomeBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <Link to="/candidate/in-process">
          <h1>
            <StyledBriefcaseBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <Link to="/candidate/my-page">
          <h1>
            <StyledAddressCardBtn inputColor={colorScheme} />
          </h1>
        </Link>
        <Link to="/candidate/settings">
          <h1>
            <StyledSettingsBtn inputColor={colorScheme} />
          </h1>
        </Link>

        <a onClick={logOut}>
          <h1>
            <StyledLogOutCircleBtn inputColor={colorScheme} />
          </h1>
        </a>
      </Container>
    );
  }
  return render;
}

export default Navbar;

const Container = styled.div`
  position: fixed;
  text-align: center;
  background-color: ${(props) => props.inputColor.primary};
  color: ${(props) => props.inputColor.text};
  height: 100%;
  width: 160px;
  z-index: 2;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 16px;
  padding-top: 6%;
`;
const StyledHomeBtn = styled(Home)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;

const StyledPersonSearchBtn = styled(PersonSearch)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;

const StyledBearSmileBtn = styled(BearSmile)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;
const StyledSettingsBtn = styled(Settings)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;

const StyledPeopleTeamAddBtn = styled(PeopleTeamAdd)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;

const StyledLogOutCircleBtn = styled(LogOutCircle)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;

const StyledBriefcaseBtn = styled(Briefcase)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;
const StyledAddressCardBtn = styled(AddressCard)`
  cursor: pointer;
  height: 40px;
  width: 40;
  color: ${(props) => props.inputColor.text};
`;
