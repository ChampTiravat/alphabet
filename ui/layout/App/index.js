import React, {Fragment} from "react"
import styled, {keyframes} from "styled-components"

const AppLayoutContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: auto;
`

const FadeInEffect = keyframes`
  from { opacity: 0; transform: scale(1.1); };
    to { opacity: 1; transform: scale(1); };
`

const MoveInEffect = keyframes`
  from { transform: translateY(-50px); };
    to { transform: translateY(0); };
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  animation-name: ${FadeInEffect};
  animation-duration: 300ms;
`

const SidebarMenu = styled.div`
  animation-name: ${MoveInEffect};
  animation-duration: ${(p) => p.delay || "300ms"};

  font-size: 1.7em;
  font-weight: 500;
  text-align: center;

  height: auto;
  width: 600px;

  margin-bottom: 20px;
  padding: 1em;

  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  transition: 200ms ease-in;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    width: 800px;
    background-color: #333;
    color: #fff;
  }
  &:active {
    color: #333;
    background-color: #fff;
  }
`

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  rigth: 0;
  margin: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
`

const ContentContainer = styled.div`
  margin-top: 50px;
`

const FloatingMenuButton = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 70px;
  width: 70px;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  transition: all 200ms ease-in;
  &:hover {
    background-color: #333;
  }
`

class AppLayout extends React.PureComponent {
  state = {
    showSidebar: !false,
  }

  render() {
    const {children} = this.props
    const {showSidebar} = this.state

    const isAuthenticated = true

    return isAuthenticated ? (
      <Fragment>
        <AppLayoutContainer>
          <Navbar />
          <ContentContainer>
            {showSidebar && (
              <Sidebar>
                <SidebarMenu delay="400ms">Biography</SidebarMenu>
                <SidebarMenu delay="300ms">Blog and Thoughts</SidebarMenu>
                <SidebarMenu delay="20ms">Portfolio</SidebarMenu>
              </Sidebar>
            )}
            {children}
          </ContentContainer>
        </AppLayoutContainer>
        <FloatingMenuButton
          onClick={() => this.setState((ps) => ({showSidebar: !ps.showSidebar}))}
        />
      </Fragment>
    ) : null
  }
}

export default AppLayout
