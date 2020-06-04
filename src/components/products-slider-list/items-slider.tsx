import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import { IoMdHeartEmpty } from 'react-icons/io';

export interface ItemProps {
  product: {
    id: number;
    image: string;
    title: string;
    category: string;
    price: number;
    liked: boolean;
  }[];
}

class Item extends React.Component<ItemProps> {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };

    const itemSlick = this.props.product.map((c, index) => {
      return (
        <Card className="productItem" style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={c.image} />
          <Card.Body>
            <Card.Title className="titleTag">{c.title}</Card.Title>
            <Card.Text className="categTag">{c.category} </Card.Text>
            <Card.Text className="priceTag">{`${c.price} EGP`}</Card.Text>
            <div className="buttons">
              <Button className="addToCartBtn" variant="link">
                Add to cart
              </Button>
              <span style={{ float: 'right' }}>
                <Button className="likeBtn" variant="link">
                  <IoMdHeartEmpty
                    className={`${c.liked ? 'red' : 'grey'}`}
                    style={{ fontSize: '25px' }}
                  />
                </Button>
              </span>
            </div>
          </Card.Body>
        </Card>
      );
    });
    return (
      <Carousel
        infinite={true}
        responsive={responsive}
        className="newArrivalSlider"
      >
        {itemSlick}
      </Carousel>
    );
  }
}

export default Item;
