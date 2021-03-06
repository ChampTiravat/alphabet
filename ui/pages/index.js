import React from "react"
import styled from "styled-components"

import AppLayout from "../layout/App"
import Card from "../components/Card"
import Section from "../components/Section"
import PageHeader from "../components/PageHeader"

const IndexPage = () => (
  <AppLayout>
    <PageHeader>Introduction</PageHeader>
    <Section bg="#999">
      Biography 
      <div>
        <Card />
      </div>
    </Section>
    <Section bg="#888">Blog and Thought</Section>
    <Section>Portfolio</Section>
  </AppLayout>
)

export default IndexPage
