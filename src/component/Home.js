import React from "react";
import Graph from './graph.js';


function Home(){
    return(
        <div style={{backgroundColor:"black",display:"inline-block",width: '100%'}}>
         <div style={{display:"inline-block",color:"white",fontSize: '72px'}} >
         <img src="https://c.tadst.com/gfx/600x337/istock-936863548.jpg?1" height= '67px'/>
         43°C|°F
         </div>
         <div style={{display:"inline-block",marginLeft:"10px"}}>
            <p style={{color: 'white'}}>Precipitation:0%<br></br>Humidity:16%<br></br>Wind:18Km/h</p>  
         </div>
         <div style={{color:"white",marginLeft:"10px"}}>
            <p style={{display:"inline-block"}}><a>Temperature</a> |</p>
            <p style={{display:"inline-block"}}>Precipitation | </p>
            <p style={{display:"inline-block"}}>Wind</p>
         </div>
         <Graph/>
        </div>
    )
}
export default Home;