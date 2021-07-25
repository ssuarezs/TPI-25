import React from 'react';
import { Geojson } from 'react-native-maps';
import * as turf from '@turf/turf'

import sin from './geojson/1Sin.json'
import reg from './geojson/2reg.json'
import imp from './geojson/3imp.json'
import com from './geojson/4com.json'
import ame from './geojson/5ame.json'
import reh from './geojson/6reh.json'
import res from './geojson/7res.json'
import agr from './geojson/8agr.json'
import con from './geojson/9con.json'
import sil from './geojson/10sil.json'
import silC from './geojson/11silvoCond.json'

export default ( posicion ) => {

  let point = turf.point([0, 0])

 if(posicion != null){
     point = turf.point([posicion.longitude, posicion.latitude])
   }

  let sinP = turf.booleanPointInPolygon(point, sin.features[0]);
  let regP = turf.booleanPointInPolygon(point, reg.features[0]);
  let impP = turf.booleanPointInPolygon(point, imp.features[0]);
  let comP = turf.booleanPointInPolygon(point, com.features[0]);
  let ameP = turf.booleanPointInPolygon(point, ame.features[0]);
  let rehP = turf.booleanPointInPolygon(point, reh.features[0]);
  let resP = turf.booleanPointInPolygon(point, res.features[0]);
  let agrP = turf.booleanPointInPolygon(point, agr.features[0]);
  let conP = turf.booleanPointInPolygon(point, con.features[0]);
  let silP = turf.booleanPointInPolygon(point, sil.features[0]);
  let siCP = turf.booleanPointInPolygon(point, silC.features[0]);

  let detHallado = 'lala'

    if (sinP) {detHallado = 'SINAP'}
    if (regP) {detHallado = 'SINAP'}
    if (impP) {detHallado = 'SINAP'}
    if (comP) {detHallado = 'SINAP'}
    if (ameP) {detHallado = 'SINAP'}
    if (rehP) {detHallado = 'SINAP'}
    if (resP) {detHallado = 'SINAP'}
    if (agrP) {detHallado = 'SINAP'}
    if (conP) {detHallado = 'SINAP'}
    if (silP) {detHallado = 'SINAP'}
    if (siCP) {detHallado = 'SINAP'}

  return detHallado;

  }

