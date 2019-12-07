import React from "react";
import styled, { keyframes } from "styled-components";

const NAVBAR_HEIGHT: string = "60px";
const BOX_BORDER_RADIUS: string = "7px";

const ContentWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  width: 1400px;
  /* background-color: blue; */
`;

const NavbarContainer = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  height: ${NAVBAR_HEIGHT};
  width: 100%;
  background-color: #fff;
  /* background-color: green; */
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
`;

const NavbarHeader = styled("div")`
  /* background: red; */
  height: ${NAVBAR_HEIGHT};
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AppLogoImage = styled("span")`
  display: inline-block;
  margin: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #888;
`;

const AppLogoText = styled("h1")`
  display: inline-block;
  margin: 0;
  font-weight: 600;
  font-size: 2em;
  cursor: pointer;
  color: #555;
`;

const NavbarPanel = styled("div")`
  /* background-color: yellow; */
  cursor: pointer;
  width: 900px;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const NavbarMenu = styled("ul")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* display: inline-block; */
  width: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavbaMenuList = styled("li")`
  /* background-color: orange; */
  display: inline-block;
  padding: 0.7em 2em;
  margin: 0;
  border-radius: ${BOX_BORDER_RADIUS};
  cursor: pointer;
  color: #666;
  /* border: 1px solid red; */
  &:hover {
    background-color: #ccc;
    color: #fff;
  }
`;

const Navbar: React.FC = () => {
  //
  return (
    <NavbarContainer>
      <ContentWrapper>
        <NavbarPanel>
          <NavbarMenu>
            {/* <a><NavbaMenuList>BLOGS</NavbaMenuList></a> */}
            <a>
              <NavbaMenuList>Works</NavbaMenuList>
            </a>
            <a>
              <NavbaMenuList>About</NavbaMenuList>
            </a>
          </NavbarMenu>
        </NavbarPanel>
        <NavbarHeader>
          {/* <AppLogoImage /> */}
          <a>
            <AppLogoText>LOGO</AppLogoText>
          </a>
        </NavbarHeader>
        <NavbarPanel>
          <NavbarMenu>
            <a>
              <NavbaMenuList>Blogs</NavbaMenuList>
            </a>
            <a>
              <NavbaMenuList>Contact</NavbaMenuList>
            </a>
          </NavbarMenu>
        </NavbarPanel>
      </ContentWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
