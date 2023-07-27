import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import prd1 from "../../../assets/images/prd1.jpg";
import prd3 from "../../../assets/images/prd3.jpg";
import "./_tabs.scss";
const TabsProduct = () => {
  return (
    <Tabs className="tabs">
      <TabList>
        <Tab>Best Seller</Tab>
        <Tab>New</Tab>
        <Tab>Sale</Tab>
        <Tab>Old</Tab>
      </TabList>

      <TabPanel>
        <div className="content">
          <div className="prj">
            <div className="image-prj">
              <img src={prd1} alt="" />
            </div>
            <div className="info-prj">
              <h1>hello Lorem, ipsum.</h1>
              <p>75.00 $</p>
            </div>
            <span>New</span>
          </div>
          <div className="prj">
            <div className="image-prj">
              <img src={prd1} alt="" />
            </div>
            <div className="info-prj">
              <h1>hello Lorem, ipsum.</h1>
              <p>75.00 $</p>
            </div>
            <span>New</span>
          </div>
          <div className="prj">
            <div className="image-prj">
              <img src={prd3} alt="" />
            </div>
            <div className="info-prj">
              <h1>hello Lorem, ipsum.</h1>
              <p>75.00 $</p>
            </div>
            <span>New</span>
          </div>
          <div className="prj">
            <div className="image-prj">
              <img src={prd3} alt="" />
            </div>
            <div className="info-prj">
              <h1>hello Lorem, ipsum.</h1>
              <p>75.00 $</p>
            </div>
            <span>New</span>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="content">
          <div className="prj">
            <div className="image-prj">
              <img src={prd3} alt="" />
            </div>
            <div className="info-prj">
              <h1>hello Lorem, ipsum.</h1>
              <p>75.00 $</p>
            </div>
            <span>New</span>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="content">
          <div className="prj">
            <div className="image-prj">
              <img src={prd1} alt="" />
            </div>
            <div className="info-prj">
              <h1>hello Lorem, ipsum.</h1>
              <p>75.00 $</p>
            </div>
            <span>Sale</span>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="content">
          <div className="prj">
            <div className="image-prj">
              <img src={prd3} alt="" />
            </div>
            <div className="info-prj">
              <h1>hello Lorem, ipsum.</h1>
              <p>75.00 $</p>
            </div>
            <span>Old</span>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabsProduct;
