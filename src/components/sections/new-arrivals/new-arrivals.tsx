import * as React from 'react';

import Title from '../../title/title';
import TabsNav from './tabs-nav';

export interface NewArrivalsProps {}

export interface NewArrivalsState {}

class NewArrivals extends React.Component<NewArrivalsProps, NewArrivalsState> {
  state = { title: 'New Arrivals' };
  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} arrow={true} background={false} />
        <TabsNav />
      </React.Fragment>
    );
  }
}

export default NewArrivals;
