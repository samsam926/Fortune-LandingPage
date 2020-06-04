import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import openMenu from '../../images/open-menu.png';

export interface MainNavbarProps {}

export interface MainNavbarState {
  menuItems: string[];
  active: boolean;
}

const menuItems: string[] = [
  'Fragrance',
  'Makeup',
  'Skin Care',
  'Brands',
  'New Arrival',
  'Best Sellers',
];

class MainNavbar extends React.Component<MainNavbarProps, MainNavbarState> {
  state: MainNavbarState = {
    menuItems,
    active: false,
  };

  render() {
    const menuItems = this.state.menuItems.map((c, index) => {
      return <Nav.Link key={index}>{c}</Nav.Link>;
    });
    return (
      <React.Fragment>
        <Container className="mainNavbar">
          <Navbar expand="md">
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse id="main-navbar-nav">
              <Nav className="mr-auto text-md-left text-center">
                <Nav.Link className="d-md-block d-none">
                  <img src={openMenu} alt="menu" />
                </Nav.Link>
                {menuItems}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </React.Fragment>
    );
  }
}

export default MainNavbar;
