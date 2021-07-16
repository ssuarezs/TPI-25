import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VisInfo from '../../Determi/aboutDeter/visInfo'
import sty from './styles.js'

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={sty.title}>
          INFORMACION RELACIONADA
      </Text>
      <VisInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: sty.container,
});
