import React, { useMomo } from "react";
import { Badge, Descriptions } from 'antd';

import MapComponent from "./map.js";
import "./component.css"

export default function BioComponent() {

  return (
    <div id="Biography-container">
      <h1>Biography</h1>
      <div id="Biography-description-container">
        <Descriptions title="User Info" bordered>
          <Descriptions.Item class="Biography-col1" label="Birth" span={3}>94.06.01</Descriptions.Item>
          <Descriptions.Item label="Gender" span={3}>Male</Descriptions.Item>
          <Descriptions.Item label="Github" span={3}>https://github.com/enfow</Descriptions.Item>
          <Descriptions.Item label="LinkedIn" span={3}>https://www.linkedin.com/in/enfow/</Descriptions.Item>
        </Descriptions>
      </div>
      <div id="Biography-map-container">
        <MapComponent />
      </div>
    </div>
  );
}
