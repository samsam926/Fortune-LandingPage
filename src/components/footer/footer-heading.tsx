import * as React from 'react';

import logo from '../../images/logo-white.png';
import locationIcon from '../../images/signs.png';

export interface FooterHeaderProps {}

export interface FooterHeaderState {}

class FooterHeader extends React.Component<
  FooterHeaderProps,
  FooterHeaderState
> {
  state = {};
  render() {
    return (
      <div className="footerHead">
        <div className="footer-head-bg">
          <div className="container">
            <div className="row footer-padding">
              <div className="col-md-8 footer-logo">
                <img src={logo} alt="" />
              </div>
              <div className="col-md-4 footer-stores">
                <div className="row">
                  <div className="col-md-12 footer-stores-content">
                    <span>
                      <img src={locationIcon} alt="location" />
                    </span>
                    <h2>Stores</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterHeader;
