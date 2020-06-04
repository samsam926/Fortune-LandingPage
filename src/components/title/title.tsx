import * as React from 'react';

import TitleArrow from '../../images/title-arrow.svg';

export interface SectionTitleProps {
  title: string;
  arrow?: boolean;
  background?: boolean;
}

class SectionTitle extends React.Component<SectionTitleProps> {
  state = {
    arrow: false,
    background: true,
  };
  render() {
    return (
      <div className="text-center">
        <div className={this.props.background ? 'bg-title' : ''}>
          <h2 className="sectionTitle"> {this.props.title} </h2>

          <span
            className="titleArrow"
            style={
              this.props.arrow
                ? { display: 'inline-block' }
                : { display: 'none' }
            }
          >
            <img src={TitleArrow} alt="" />
            <img src={TitleArrow} alt="" />
          </span>
        </div>
      </div>
    );
  }

  titleTextHandle() {
    return 'Hello title!';
  }
}

export default SectionTitle;
