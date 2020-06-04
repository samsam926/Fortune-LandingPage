import * as React from 'react';

import Title from '../../title/title';
import BestSellerTabsNav from './tabs-nav';

export interface BestSellerProps {}

export interface BestSellerState {}

class BestSeller extends React.Component<BestSellerProps, BestSellerState> {
  state = { title: 'Best Seller' };
  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} arrow={true} background={true} />
        <BestSellerTabsNav />
      </React.Fragment>
    );
  }
}

export default BestSeller;
