import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ItemHU from '../components/itemHU';

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
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: '#fec',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  div: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
