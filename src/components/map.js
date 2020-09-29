import React, { useState } from "react";
import ReactMapGL, {
    Marker,
    NavigationControl,
    GeolocateControl
  } from "react-map-gl"
  import location from "../images/location.svg"
  
//   const mapboxApiToken = process.env.REACT_APP_MAPBOX_TOKEN
  const token = "pk.eyJ1IjoibWlrZWplIiwiYSI6ImNrYjhuaGQwYzA1eDEydG52a2N5ZzdmajgifQ._vtdBFUd5uy2muGbX9d4Uw"
  const markerStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        width: '40px',
        height: '40px'
    }
        
  
  const MapLocation = () => {
    // const [selected, setSelected] = useState(false)
  
    const [viewPort, setViewPort] = useState({
      latitude: 26.234400,
      longitude: -80.136980,
      width: "100vw",
      height: "100vh",
      zoom: 15,
    })
  
    return (
      <div>
       <ReactMapGL {...viewPort} 
       mapboxApiAccessToken={token} 
       onViewportChange={viewport => {
         setViewPort(viewport);
       }}
       mapStyle="mapbox://styles/mikeje/ckb8te4bf0crm1jpbasgq2iy1">
           <Marker
            latitude={26.234659}
            longitude={-80.132629}
            offsetLeft={-20}
            className="marker"><img src={location} alt="marker" style={markerStyle}/>
            </Marker>
            <div style={{ position: "absolute", right: 0 }}>
            <NavigationControl />
            </div>
            <div style={{ position: "absolute", left: 0 }}>
            <GeolocateControl
                positionOptions={{ enableHighAccuracy: true }}
                trackUserLocation={true}
            />
            </div>
       </ReactMapGL>
      </div>
    )
  }
  
export default MapLocation;