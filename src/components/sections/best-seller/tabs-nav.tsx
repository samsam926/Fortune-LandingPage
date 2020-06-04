import * as React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import WomenProducts from './women-products';
import MenProducts from './men-products';

class BestSellerTabsNav extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="women"
          id="categoryTabs"
          variant="pills"
          className="widgetTabs"
        >
          <Tab eventKey="women" title="Women">
            <WomenProducts />
          </Tab>
          <Tab eventKey="men" title="Men">
            <MenProducts />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default BestSellerTabsNav;
