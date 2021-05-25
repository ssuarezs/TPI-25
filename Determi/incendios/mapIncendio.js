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

  const pointInMB = turf.booleanPointInPolygon(point, muybaja.features[0]);
  const pointInB = turf.booleanPointInPolygon(point, baja.features[0]);
  const pointInm = turf.booleanPointInPolygon(point, medio.features[0]);
  const pointInA = turf.booleanPointInPolygon(point, alta.features[0]);
  const pointInMA = turf.booleanPointInPolygon(point, muyalta.features[0]);

  if (pointInMB) { 
    confResultado('Muy baja') 
    return (
      <Geojson geojson={muybaja} fillColor="blue" />
    ) 
  }else if(pointInB){  
    confResultado('Baja') 
    return (
      <Geojson geojson={baja} fillColor="blue" />
    )  
  }else if(pointInm){  
    confResultado('Media') 
    return (
      <Geojson geojson={medio} fillColor="blue" />
    )  
  }else if(pointInA){  
    confResultado('Alta') 
    return (
      <Geojson geojson={alta} fillColor="blue" />
    )  
  }else if(pointInMA){  
    confResultado('Muy alta') 
    return (
      <Geojson geojson={muyalta} fillColor="blue" />
    )
  }else if(mapInteractivo){
    return (
    <>
      <Geojson geojson={muybaja} fillColor="blue" />
      <Geojson geojson={baja} fillColor="green" />
      <Geojson geojson={medio} fillColor="yellow" />
      <Geojson geojson={alta} fillColor="orange" />
      <Geojson geojson={muyalta} fillColor="red" />
    </>
    )
  }
   return (  
    <>
    </>
  );
}

