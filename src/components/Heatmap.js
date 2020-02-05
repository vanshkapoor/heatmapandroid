import React,{Component} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

  const heatmapData = {    
    positions: [
      {lat: 59.955413, lng: 30.337844},
      {lat: 59.955400, lng: 30.337844},
      {lat: 59.955820, lng: 30.337844},
      {lat: 59.955490, lng: 30.337844},
      {lat: 59.955470, lng: 30.3374},
      {lat: 59.95330, lng: 30.337844},

    ],
    options: {   
      radius: 40,   
      opacity:0.8,
  }
}
  
  class Heatmap extends React.Component {
    static defaultProps = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 15
    };

    render() {
      return (
         <GoogleMapReact
          style={{position:'absolute !Important'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary = {true}
          heatmap={heatmapData}
        >
          {/* <AnyReactComponent 
            lat={59.955413} 
            lng={30.337844} 
            text={'Kreyser Avrora'} 
          />
          <AnyReactComponent 
            lat={59.5412} 
            lng={30.337844} 
            text={'test'} 
          /> */}
        </GoogleMapReact>
      );
    }
  }

  export default Heatmap
