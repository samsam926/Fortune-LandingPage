import * as React from 'react';

import prod1 from '../../../images/product-1.jpg';
import prod2 from '../../../images/product-2.jpg';
import prod3 from '../../../images/product-3.jpg';
import prod4 from '../../../images/product-4.jpg';
import { Container } from 'react-bootstrap';
import ItemList from '../../products-slider-list/items-list';

export interface MakeUpProps {}

export interface MakeUpState {}

class MakeUp extends React.Component<MakeUpProps, MakeUpState> {
  state = {
    products: [
      {
        id: 1,
        image: prod1,
        title: 'Clarins Super restorative total eye',
        category: 'CLARINS',
        price: 1750,
        liked: false,
      },
      {
        id: 2,
        image: prod2,
        title: 'Wanted set EDT 100 ML + Deo Spray 150',
        category: 'AZZARO',
        price: 1900,
        liked: false,
      },
      {
        id: 3,
        image: prod3,
        title: 'Armani code absolu homme EDP 110 ML',
        category: 'GIORGIO ARMANI',
        price: 2599,
        liked: false,
      },
      {
        id: 4,
        image: prod4,
        title: 'Givenchy make-up le rouge NO. 306',
        category: 'GIVENCHY',
        price: 835,
        liked: false,
      },
      {
        id: 5,
        image: prod2,
        title: 'Wanted set EDT 100 ML + Deo Spray 150',
        category: 'AZZARO',
        price: 1900,
        liked: false,
      },
      {
        id: 6,
        image: prod3,
        title: 'Armani code absolu homme EDP 110 ML',
        category: 'GIORGIO ARMANI',
        price: 2599,
        liked: false,
      },
      {
        id: 7,
        image: prod3,
        title: 'Armani code absolu homme EDP 110 ML',
        category: 'GIORGIO ARMANI',
        price: 2599,
        liked: false,
      },
      {
        id: 8,
        image: prod4,
        title: 'Givenchy make-up le rouge NO. 306',
        category: 'GIVENCHY',
        price: 835,
        liked: false,
      },
    ],
  };
  render() {
    return (
      <Container
        style={{
          marginTop: '50px',
        }}
        className="men-products"
      >
        <ItemList product={this.state.products} />
      </Container>
    );
  }
}

export default MakeUp;
