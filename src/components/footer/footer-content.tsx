import * as React from 'react';

import fbLogo from '../../images/fb-logo.png';
import instaLogo from '../../images/instaLogo.png';

export interface FooterContentProps {}

export interface FooterContentState {}

class FooterContent extends React.Component<
  FooterContentProps,
  FooterContentState
> {
  state = {};
  render() {
    return (
      <div className="footerContent">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p className="footerBrief">
                Fortune stores are one of the leading retailers in the field of
                perfumes, makeup and skin care, Fortune stores; Established in
                the Egyptian market since 1997. Powered by its vast experience
                in beauty & knowledge of client needs, Fortune offers
                professional and outstanding service and consultancy to create a
                unique experience for each client. Fortune….your world of
                beauty.
              </p>
            </div>
            <div className="col-md-4">
              <div className="footerContact">
                <h4>Contact Us</h4>
                <p>11907 - 154 st., Cairo, Egypt.</p>
                <p>+2 (123) 456 7890</p>
                <p>info@fotune.com.eg</p>
                <div className="socialIcons">
                  <span>
                    <a href="/#">
                      <img src={fbLogo} alt="facebook" />
                    </a>
                  </span>
                  <span style={{ marginLeft: '25px' }}>
                    <a href="/#">
                      <img src={instaLogo} alt="instagram" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterContent;
