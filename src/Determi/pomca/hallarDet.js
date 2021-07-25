import React from 'react';
import { Geojson } from 'react-native-maps';
import * as turf from '@turf/turf'

import sin from './geojson/1Sin'
import reg from './geojson/2reg.json'
import imp from './geojson/3imp.json'
import com from './geojson/4com.json'
import ame from './geojson/5ame.json'
import reh from './geojson/6reh.json'
import res from './geojson/7res.json'
import agr from './geojson/8agr.json'
import con from './geojson/9con.json'
import sil from './geojson/10sil.json'

export default ( posicion ) => {

    let point = turf.point([0, 0])
    let la = {}

    if(posicion != null){ point = turf.point([posicion.longitude, posicion.latitude])}

    sin.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.sin = true}})
    reg.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.reg = true}})
    imp.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.imp = true}})
    com.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.com = true}})
    ame.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.ame = true}})
    reh.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.reh = true}})
    res.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.res = true}})
    agr.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.agr = true}})
    con.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.con = true}})
    sil.features.forEach((i) => {if(turf.booleanPointInPolygon(point, i)){la.sil = true}})


  let detHallado = ''

    if (la.sin) {detHallado = detHallado + 'SINAP, '}
    if (la.reg) {detHallado = detHallado + 'con Reglamentacion Especial, '}
    if (la.imp) {detHallado = detHallado + 'de Importancia Ambiental, '}
    if (la.com) {detHallado = detHallado + 'complementaria para la conservación, '}
    if (la.ame) {detHallado = detHallado + 'de Amenaza, '}
    if (la.reh) {detHallado = detHallado + 'de Rehabilitación, '}
    if (la.res) {detHallado = detHallado + 'de Restauración, '}
    if (la.agr) {detHallado = detHallado + 'Agrícola, '}
    if (la.con) {detHallado = detHallado + 'Agrícola Condicionada, '}
    if (la.sil) {detHallado = detHallado + 'Agrosilvopastoril,  '}

  return detHallado;

  }

