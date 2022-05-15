import React, { useState } from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.min.css';
import './index.css';
import SiderPage from './components/sider.js';

const App = () => {
  return (
    <div>
      <SiderPage />
    </div>
  );
};

render(<App />, document.getElementById('root'));
