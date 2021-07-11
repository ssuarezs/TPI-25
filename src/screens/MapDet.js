import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import ZonaMap from '../Determi/zonaMap'
import sty from './styles.js'

export default ({navigation}) => {


   return (
    <View style={sty.container}>
       <ZonaMap/>
    </View>

  );
}


