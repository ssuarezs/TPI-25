import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import VisInfo from '../../Determi/aboutDeter/visInfo'
import sty from './styles.js'
const {width, height} = Dimensions.get('screen')

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={sty.title}>
          INFORMACION RELACIONADA
      </Text>
      <View style={{height:3 , backgroundColor: '#206a5d', width: width*0.7 }} />
      <VisInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: sty.container,
});
