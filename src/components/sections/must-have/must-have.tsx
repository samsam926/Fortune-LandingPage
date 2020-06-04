import * as React from 'react';

import Title from '../../title/title';
import MustHaveTabsNav from './tabs-nav';

export interface MustHaveProps {}

export interface MustHaveState {}

class MustHave extends React.Component<MustHaveProps, MustHaveState> {
  state = { title: 'FOR HIM & HER MUST-HAVES' };
  render() {
    return (
      <React.Fragment>
        <Title title={this.state.title} arrow={false} background={false} />
        <MustHaveTabsNav />
      </React.Fragment>
    );
  }
}

export default MustHave;
