import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

import hallarDet from './hallarDet'
import info from './info.json'
import InfoView from '../compDet/infoView'
const {width, height} = Dimensions.get('screen')

export default ({ posicion }) => {

  const resDeter = hallarDet(posicion);
  const portada = require('./diagramas/portada.png')

  return (
    <View style={styles.center}>
      {resDeter ?
          <>
          <Image source={portada} style={{
            width:width*0.88,
            height: width*0.22,
            resizeMode:'cover',
        }}/>
        <View style={{backgroundColor: '#206a5d', height: 2, width: width*0.9, marginBottom: 4,}}/>
        <Text style={styles.subtitle} >NIVEL DE AMENAZA{':'} {resDeter}</Text>
          </>
      :
        <Text style={styles.subtitle} >La zona elegida no tiene cobertura</Text>
      }
        <InfoView info={info} />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    margin: 2,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
    marginLeft: 20,
    marginRight: 20,
  },
});

