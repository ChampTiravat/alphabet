import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled("div")<{ bg?: string }>`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: ${p => p.bg || "#777"};
`;

Section.propTypes = {
  bg: PropTypes.string,
};

export default Section;
