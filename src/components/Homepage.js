import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import * as styles from "../styled-components/styled-components";
import {
  IoIosSearch,
  IoIosArrowDown,
  IoIosMenu,
  IoIosHome,
  IoIosPeople,
  IoIosChatbubbles,
  IoIosBuild
} from "react-icons/io";

export default function HomePage(props) {
  return (
    <div>
      <styles.StyledHeadSection>
        <styles.StyledHeader>
          <IoIosMenu />
          <styles.StyledH1>Questions Feed</styles.StyledH1>
          <IoIosSearch />
        </styles.StyledHeader>
        <styles.StyledSubheading>
          Topic <IoIosArrowDown />
        </styles.StyledSubheading>
      </styles.StyledHeadSection>
      <styles.StyledQuestionCard>
        <h1>Lucy Lee</h1>
        <h2>Photography</h2>
        <p>What does Setting the aperture to a lower number effect?</p>
      </styles.StyledQuestionCard>
      <styles.StyledFooter>
        <IoIosHome />
        <IoIosPeople />
        <IoIosChatbubbles />
        <IoIosBuild />
      </styles.StyledFooter>
    </div>
  );
}
