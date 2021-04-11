import React from 'react';
import {  MDBFooter } from "mdbreact";
const ComponentThree = () =>{
    return(
<div className="my-address">
    <h2>je suis de bizerte Raf Raf</h2>


    <MDBFooter color="stylish-color-dark" className="page-footerfont-smallpt-4mt-4">
          <div className="text-center py-3">  
            <h5 className="mb-1">Map adress</h5>
              
            <img className="map-image" src='/imagemap.jpg' alt='mymapadress'/>
          </div>
    </MDBFooter>
</div>
      )
    }
export default ComponentThree;