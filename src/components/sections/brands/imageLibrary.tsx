import * as React from 'react';

import firstBrandImage from '../../../images/brand-image-1.png';
import firstBrandlogo from '../../../images/brand-logo-1.png';
import SecondBrandImage from '../../../images/brand-image-2.png';
import SecondBrandlogo from '../../../images/brand-logo-2.png';
import ThirdBrandImage from '../../../images/brand-image-3.png';
import ThirdBrandlogo from '../../../images/brand-logo-3.png';

export interface BrandsProps {}

export interface BrandsState {
  brands: {
    url: string;
    logo: string;
  }[];
}

class BrandImages extends React.Component<BrandsProps, BrandsState> {
  state: BrandsState = {
    brands: [
      {
        url: firstBrandImage,
        logo: firstBrandlogo,
      },
      {
        url: SecondBrandImage,
        logo: SecondBrandlogo,
      },
      {
        url: ThirdBrandImage,
        logo: ThirdBrandlogo,
      },
    ],
  };
  brandsImages = this.state.brands.map((image, index) => {
    return (
      <div className="col-md-4" key={index}>
        <div className="brandImageItem">
          <img src={image.url} alt="brand" className="brandImage" />
          <img src={image.logo} alt="brand" className="brandLogo" />
        </div>
      </div>
    );
  });
  render() {
    return <div className="row no-gutters brands">{this.brandsImages}</div>;
  }
}

export default BrandImages;
