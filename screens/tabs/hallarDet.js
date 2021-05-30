import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ItemHU } from '../components/index';
import sty from '../styles.js'

export default ({navigation}) => {
 
  const items = [    
    {
      titulo: 'HALLAR UBICACION',
      ruta: 'HallarP'
    },     
    {
      titulo: 'ELEGIR PUNTO',
      ruta: 'ElegirP'
    },     
    {
      titulo: 'MAPA INTERACTIVO',
      ruta: 'Mapa'
    }, 
 ]
  return (
    <View style={styles.container}>
      <Text>Hallar Determinantes Ambientales</Text>
      <View style={styles.itemCont}>
	  <ItemHU navigation={navigation} item={items[0]}  />
	<View style={styles.div}>
	  <ItemHU navigation={navigation} item={items[1]}  />
	  <ItemHU navigation={navigation} item={items[2]}  />
	</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: sty.container,
  itemCont: {     
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
