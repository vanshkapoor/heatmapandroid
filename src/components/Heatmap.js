import React,{Component} from 'react'
import GoogleMapReact from 'google-map-react'
import firebase from 'firebase'

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


let heatmapData = {    
  positions: [
    {lat: 28.5590179, lng: 77.0534842}
    // {lat: 28.5590179, lng: 77.0534842},
    // {lat: 28.5590179, lng: 77.0534842},
    // {lat: 28.5590179, lng: 77.0534842},
    // {lat: 28.5590179, lng: 77.0534842},      
  ],
  options: {   
    radius: 40,   
    opacity:0.7,
}
}
  // let positions =[]
  
  class Heatmap extends React.Component {
    static defaultProps = {
      center: {lat: 28.5590179, lng: 77.0534842},
      zoom: 15
    };

    componentDidMount(){
      let itemsRef = firebase.database().ref('reports')
      itemsRef.on("value",(snapshot) => {
        let data = snapshot.val()
        Object.entries(data.SOS).map(([key,value]) => heatmapData.positions.push({ lat:value.lat , lng:value.long }))
      })
    }

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
