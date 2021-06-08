import React from 'react';
import { Geojson } from 'react-native-maps';
import * as turf from '@turf/turf'

import muybaja from './muybaja.json' 
import baja from './baja.json' 
import medio from './media.json' 
import alta from './alta.json' 
import muyalta from './muyalta.json' 

export default ( posicion ) => {

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
    detHallado = 'MUY BAJO'
  }else if(pointInB){  
    detHallado = 'BAJO'
  }else if(pointInm){  
    detHallado = 'MEDIO'
  }else if(pointInA){  
    detHallado = 'ALTO'
  }else if(pointInMA){  
    detHallado = 'MUY ALTO'
  }

  return detHallado;

  }

