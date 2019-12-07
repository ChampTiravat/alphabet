import React from "react"
import styled from "styled-components"

const Section = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: ${(p) => p.bg || "#777"};
`

export default Section;
