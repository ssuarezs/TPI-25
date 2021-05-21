import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Map from './components/Map' 

export default ({navigation}) => {

  let posicion	

   return (
    <>
    <View style={styles.mapa}>
      <Map posicion={posicion} />
    </View>
    <View style={styles.container}>
      <Text>Pagina elegir punto</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa: {
    flex: 2,
  }
});

