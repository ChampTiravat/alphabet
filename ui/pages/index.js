import React from "react";
import styled from "styled-components";

import AppLayout from "../layout/App"

const PageHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 700px;
  background-color: #bbb;
`;

const Section = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: ${p => p.bg || "#777"};
`;

const IndexPage = () => (
  <AppLayout>
    <PageHeader>
      Introduction
    </PageHeader>
    <Section bg="#999">
      Biography
    </Section>
    <Section bg="#888">
      Blog and Thought
    </Section>
    <Section>
      Portfolio
    </Section>
  </AppLayout>
);

export default IndexPage;
