import React, {useState} from "react";
import './App.css';
import BioComponent from "./components/bio.js";
import { Layout, Breadcrumb, Menu } from "antd";


const { Header, Footer, Content } = Layout;


function App() {
  const [data, setData] = React.useState(null);

  const getApi = async() => {
    const response = await fetch("/api");
    const data = await response.json();
    setData(data.message);
  }

  React.useEffect(() => {
    getApi();
  })

  return (

    <Layout>
      <Header class="App-header">
        Header
      </Header>
      <div class="Content-wrapper">
        <Content class="Content">
          <BioComponent />
          <p>{!data ? "Loading..." : data}</p>
        </Content>
      </div>
      <Footer class="App-footer">
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
