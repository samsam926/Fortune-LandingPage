import * as React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AllProducts from './allproducts';
import Fragrances from './fragrances';
import MakeUp from './makeup';
import SkinCare from './skincare';

class MustHaveTabsNav extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="all"
          id="categoryTabs"
          variant="pills"
          className="widgetTabs"
        >
          <Tab eventKey="all" title="All">
            <AllProducts />
          </Tab>
          <Tab eventKey="fragnance" title="Fragnances">
            <Fragrances />
          </Tab>
          <Tab eventKey="makeup" title="Make Up">
            <MakeUp />
          </Tab>
          <Tab eventKey="skincare" title="Skin Care">
            <SkinCare />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default MustHaveTabsNav;
