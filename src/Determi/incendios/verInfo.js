import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import hallarDet from './hallarDet'
import info from './info.json'
import InfoView from '../compDet/infoView'

export default ({ posicion }) => {

  const resDeter = hallarDet(posicion);

  return (
    <View style={styles.center}>
        <Text style={styles.subtitle} >
          NIVEL DE RIESGO{':'} {resDeter}</Text>
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

