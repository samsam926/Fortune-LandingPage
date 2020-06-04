import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import sliderImage from '../../../images/slider-1.png';
import sliderImage2 from '../../../images/slider-2.jpg';

export interface SliderProps {}

export interface SliderState {
  sliderImagesItems: string[];
  showBox: boolean;
}

const sliderImagesItems: string[] = [sliderImage, sliderImage2];
class MainSliderComponent extends React.Component<SliderProps, SliderState> {
  state: SliderState = {
    sliderImagesItems,
    showBox: false,
  };

  render() {
    const sliderImages = this.state.sliderImagesItems.map((c, index) => {
      return (
        <Carousel.Item key={index}>
          <div className="sliderImage">
            <img src={c} alt="Slider" />
          </div>
        </Carousel.Item>
      );
    });

    return (
      <div className="row no-gutters">
        <div className="col-md-12">
          <Carousel className="mainSlider" indicators={false}>
            {sliderImages}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MainSliderComponent;
