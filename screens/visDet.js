import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Map from './components/Map' 

export default ({navigation}) => {

  const posicion = navigation.getParam('location')

   return (
    <>
    <View style={styles.mapa}>
      <Map posicion={posicion} />
    </View>
    <View style={styles.container}>
      <Text>Pagina Visualizar Determinantes</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa: {
    flex: 1,
  }
});
