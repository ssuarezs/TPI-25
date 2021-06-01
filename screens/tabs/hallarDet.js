import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ItemHU } from '../components/index';
import sty from '../styles.js'

export default ({navigation}) => {
 
  const items = [    
    {
      titulo: 'HALLAR TU UBICACION',
      ruta: 'HallarP',
      img: '../assets/ubicacion.png',
      descripcion: 'Encuentra el Determinante Ambiental relacionado a tu ubicacion actual'
    },     
    {
      titulo: 'ELEGIR PUNTO',
      ruta: 'ElegirP',
      img: '../assets/elegir.png',
      descripcion: 'Escoge un punto en el mapa y su Deteminante Ambiental '
    },     
    {
      titulo: 'MAPA DE LA ZONA', 
      ruta: 'Mapa',
      img: '../assets/map.png',
      descripcion: 'Mapa del Determinante Ambiental en la zona de interes'
    }, 
 ]
  return (
    <View style={styles.container}>
	  <ItemHU navigation={navigation} item={items[0]}  />
	  <ItemHU navigation={navigation} item={items[1]}  />
	  <ItemHU navigation={navigation} item={items[2]}  />
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
});
