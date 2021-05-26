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
      {pointInMB ? <Geojson geojson={muybaja} 	fillColor="rgba( 73,166, 74,0.6)" /> : null}
      {pointInB ? <Geojson geojson={baja} 	fillColor="rgba( 84,213, 86,0.4)" /> : null}
      {pointInm  ? <Geojson geojson={medio} 	fillColor="rgba(238,255, 61,0.4)" /> : null}
      {pointInA ? <Geojson geojson={alta} 	fillColor="rgba(255,171, 61,0.4)" /> : null}
      {pointInMA ? <Geojson geojson={muyalta} 	fillColor="rgba(222, 37, 37,0.4)" /> : null}
    </>
    )
  }

