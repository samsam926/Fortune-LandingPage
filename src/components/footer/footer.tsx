import * as React from 'react';
import FooterHeader from './footer-heading';
import FooterContent from './footer-content';
import FooterRights from './footer-rights';

export interface FooterProps {}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  state = {};

  render() {
    return (
      <div className="footer">
        <FooterHeader />
        <div className="footerBG">
          <FooterContent />
          <hr className="footerEndLine" />
          <FooterRights />
        </div>
      </div>
    );
  }
}

export default Footer;
