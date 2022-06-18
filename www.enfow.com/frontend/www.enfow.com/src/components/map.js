import React, { useMomo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { GOOGLE_MAPS_KEY } from "../env/common.js";



export default function MapComponent() {
  const [googleMapsSrc, setGoogleMapsSrc] = React.useState(null);
  
  React.useEffect(() => {
    const gangnamGoogleMapsSource = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.4379692098632!2d127.02541236539872!3d37.497587235831396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1598c361b2b%3A0xdbf9af292beff3c!2z6rCV64Ko!5e0!3m2!1sko!2skr!4v1655564014682!5m2!1sko!2skr" 
    setGoogleMapsSrc(gangnamGoogleMapsSource)
  })

  return (
    <div>
      <p>Where I live</p>
      <iframe
        title="where-i-live-map"
        src={googleMapsSrc}
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"/>
    </div>
  );
}
