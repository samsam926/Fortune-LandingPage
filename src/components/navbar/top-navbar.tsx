import * as React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../../images/logo.png';
import shopperIcon from '../../images/shopper.png';
import searchIcon from '../../images/search.png';
import userIcon from '../../images/user.png';
import heartIcon from '../../images/heart.png';

export interface TopNavbarProps {}

export interface TopNavbarState {
  items: {
    href: string;
    imageUrl: any;
    alt: string;
  }[];
}

class TopNavbar extends React.Component<TopNavbarProps, TopNavbarState> {
  state: TopNavbarState = {
    items: [
      {
        href: '/#',
        imageUrl: searchIcon,
        alt: 'search',
      },
      {
        href: '/#',
        imageUrl: userIcon,
        alt: 'user profile',
      },
      {
        href: '/#',
        imageUrl: heartIcon,
        alt: 'likes',
      },
      {
        href: '/#',
        imageUrl: shopperIcon,
        alt: 'cart',
      },
    ],
  };
  topQuickAccess = this.state.items.map((c, index) => {
    return (
      <Nav.Link className="quickIcons" href={c.href} key={index}>
        <img src={c.imageUrl} alt={c.alt} />
      </Nav.Link>
    );
  });
  render() {
    return (
      <React.Fragment>
        <Container className="topNavbar">
          <Navbar expand="md">
            <Navbar.Brand href="#home">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Nav className="ml-auto">{this.topQuickAccess}</Nav>
          </Navbar>
        </Container>

        {/* Border */}
        <div className="border-custom"></div>
      </React.Fragment>
    );
  }
}

export default TopNavbar;
