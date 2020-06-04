import * as React from 'react';
import { Card, Button, Container } from 'react-bootstrap';

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

class ItemList extends React.Component<ItemProps> {
  render() {
    const itemList = this.props.product.map((c, index) => {
      return (
        // Item in Iteration with Bootstrap Card //
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
          <Card className="productItem" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={c.image} />
            <Card.Body>
              <Card.Title className="titleTag">{c.title}</Card.Title>
              <Card.Text className="categTag">{c.category} </Card.Text>
              <Card.Text className="priceTag">{`${c.price} EGP`}</Card.Text>
              {/* Add to Cart Button */}
              <div className="buttons">
                <Button className="addToCartBtn" variant="link">
                  Add to cart
                </Button>
                {/* Like Button */}
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
        </div>
      );
    });
    return (
      // List Container
      <Container className="newArrivalSlider">
        <div className="row">{itemList}</div>
      </Container>
    );
  }
}

export default ItemList;
