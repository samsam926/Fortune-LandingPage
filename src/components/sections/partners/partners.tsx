import * as React from 'react';

import partner1 from '../../../images/part-1.png';
import partner2 from '../../../images/part-2.png';
import partner3 from '../../../images/part-3.png';
import partner4 from '../../../images/part-4.png';
import partner5 from '../../../images/part-5.png';
import partner6 from '../../../images/part-6.png';

export interface PartnersProps {}

export interface PartnersState {
  partnersImages: string[];
}

class Partners extends React.Component<PartnersProps, PartnersState> {
  state: PartnersState = {
    partnersImages: [
      partner1,
      partner2,
      partner3,
      partner4,
      partner5,
      partner6,
    ],
  };
  partners = this.state.partnersImages.map((c, index) => {
    return (
      <div className="col-md-2" key={index}>
        <img src={c} alt="" className="w-100" />
      </div>
    );
  });
  render() {
    return (
      <div className="container">
        <div className="row">{this.partners}</div>
      </div>
    );
  }
}

export default Partners;
