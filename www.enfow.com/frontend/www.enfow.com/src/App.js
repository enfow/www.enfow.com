import React from "react";
import './App.css';
import MapComponent from "./components/map.js";


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
    <div>
      <MapComponent />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
