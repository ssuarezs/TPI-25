import React from 'react';
import { Geojson } from 'react-native-maps';
import * as turf from '@turf/turf'

import muybaja from './geojson/muybaja.json'
import baja from './geojson/baja.json'
import medio from './geojson/media.json'
import alta from './geojson/alta.json'
import muyalta from './geojson/muyalta.json'

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

  let detHallado

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

