import * as React from 'react';

export interface FooterRightsProps {}

export interface FooterRightsState {}

class FooterRights extends React.Component<
  FooterRightsProps,
  FooterRightsState
> {
  state = {};
  render() {
    return (
      <div className="footerRights">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h5 className="text-center text-md-left">©Fortune.Inc</h5>
            </div>
            <div className="col-md-4">
              <h5 className="text-center text-md-right">Powered by NASNAV</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterRights;
