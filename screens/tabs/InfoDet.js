import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import sty from '../styles.js'

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pagina de la info Determinantes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: sty.container,
});
