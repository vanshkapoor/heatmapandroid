import React,{useState} from 'react'
import SimpleMap from './Map'
import HeatMap from './Heatmap';

const Main = () => {
    const [heat,setHeat] = useState(false);

    const changeHeat =() =>{
      if(heat){
        setHeat(false)
      }else{
        setHeat(true)
      }
    }


    return(
        <div >
        
            <div style={{position:'absolute'}}>
              <div style={{padding:'2px',position:'absolute',zIndex:'10'}}>
              <button onClick={changeHeat} class="ui primary button">
                HeatMap
              </button>
              <button onClick={changeHeat} class="ui button">
                Basic Map
              </button>
              </div>
              {/* <div> */}
                {heat?<SimpleMap />:<HeatMap />}              
              {/* </div> */}
            </div>            
        </div>
    )
}

export default Main;