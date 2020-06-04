import * as React from 'react';

import Title from '../../title/title';
import BrandImages from './imageLibrary';

export interface BrandsProps {}

export interface BrandsState {}

class Brands extends React.Component<BrandsProps, BrandsState> {
  state = { title: "Brand's Collections" };
  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} arrow={false} background={false} />
        <BrandImages />
      </React.Fragment>
    );
  }
}

export default Brands;
