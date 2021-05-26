import React from 'react';
import { Geojson } from 'react-native-maps';
import * as turf from '@turf/turf'

import muybaja from './muybaja.json' 
import baja from './baja.json' 
import medio from './media.json' 
import alta from './alta.json' 
import muyalta from './muyalta.json' 

export default ({ posicion , confResultado, mapInteractivo }) => {

  let point = turf.point([0, 0])

 if(posicion != null){ 
     point = turf.point([posicion.longitude, posicion.latitude])
   }

  let pointInMB = turf.booleanPointInPolygon(point, muybaja.features[0]);
  let pointInB = turf.booleanPointInPolygon(point, baja.features[0]);
  let pointInm = turf.booleanPointInPolygon(point, medio.features[0]);
  let pointInA = turf.booleanPointInPolygon(point, alta.features[0]);
  let pointInMA = turf.booleanPointInPolygon(point, muyalta.features[0]);

  if (pointInMB) { 
    confResultado('Muy baja') 
  }else if(pointInB){  
    confResultado('Baja') 
  }else if(pointInm){  
    confResultado('Media') 
  }else if(pointInA){  
    confResultado('Alta') 
  }else if(pointInMA){  
    confResultado('Muy alta') 
  }
  
  if(mapInteractivo){
    pointInMB=true
    pointInB=true
    pointInm=true
    pointInA=true
    pointInMA=true
  }
    return (
    <>
      {pointInMB ? <Geojson geojson={muybaja} fillColor="blue" /> : null}
      {pointInB ? <Geojson geojson={baja} fillColor="green" /> : null}
      {pointInm  ? <Geojson geojson={medio} fillColor="yellow" /> : null}
      {pointInA ? <Geojson geojson={alta} fillColor="orange" /> : null}
      {pointInMA ? <Geojson geojson={muyalta} fillColor="red" /> : null}
    </>
    )
  }

