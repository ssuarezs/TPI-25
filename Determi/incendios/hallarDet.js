import React from 'react';
import { Geojson } from 'react-native-maps';
import * as turf from '@turf/turf'

import muybaja from './muybaja.json' 
import baja from './baja.json' 
import medio from './media.json' 
import alta from './alta.json' 
import muyalta from './muyalta.json' 

export default ( posicion ) => {

  console.log(posicion)
  let point = turf.point([0, 0])

 if(posicion != null){ 
     point = turf.point([posicion.longitude, posicion.latitude])
   }

  let pointInMB = turf.booleanPointInPolygon(point, muybaja.features[0]);
  let pointInB = turf.booleanPointInPolygon(point, baja.features[0]);
  let pointInm = turf.booleanPointInPolygon(point, medio.features[0]);
  let pointInA = turf.booleanPointInPolygon(point, alta.features[0]);
  let pointInMA = turf.booleanPointInPolygon(point, muyalta.features[0]);

  let detHallado = 'El punto elegido no tiene ningun Determinante Ambiental relacionado'
  
  if (pointInMB) { 
    detHallado = 'Muy baja'
  }else if(pointInB){  
    detHallado = 'baja'
  }else if(pointInm){  
    detHallado = 'medio'
  }else if(pointInA){  
    detHallado = 'alto'
  }else if(pointInMA){  
    detHallado = 'muy alto'
  }

  return detHallado;

  }

