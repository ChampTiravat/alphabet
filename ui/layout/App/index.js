import React from "react";
import styled from "styled-components";

const AppLayoutContainer = styled.div`
  margin: 0 auto;
  padding: 1em;
  width: 100%;
  height: auto;
`;

const Sidebar = styled.div`
  margin: 0 auto;
  padding: 1em;
  width: 300px;
  background-color: red;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  rigth: 0;
  margin: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
`;

const ContentContainer = styled.div`
  margin-top: 50px;
`;

const AppLayout = ({ children }) => {
  const isAuthenticated = true;
  return isAuthenticated ? (
    <AppLayoutContainer>
      <Navbar />
      <ContentContainer>
        <Sidebar />
        {children}
      </ContentContainer>
    </AppLayoutContainer>
  ) : null;
};

export default AppLayout;
