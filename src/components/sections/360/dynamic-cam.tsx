import * as React from 'react';

import dynamicCamImage from '../../../images/360Cam.jpg';
export interface DynamicCamProps {}

export interface DynamicCamState {}

class DynamicCam extends React.Component<DynamicCamProps, DynamicCamState> {
  state = {};
  render() {
    return (
      <div>
        <img src={dynamicCamImage} alt="dynamic-cam" className="w-100" />
      </div>
    );
  }
}

export default DynamicCam;
