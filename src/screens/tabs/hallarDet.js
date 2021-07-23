import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import sty from './styles'
import { ItemHU } from '../../components/index';
const {width, height} = Dimensions.get('screen')

const items = [
    {
      key: '1',
      titulo: 'HALLAR TU UBICACION',
      ruta: 'HallarP',
      img: '../assets/ubicacion.png',
      descripcion: 'Determinante Ambiental relacionado a tu ubicacion actual'
    },
    {
      key: '2',
      titulo: 'ELEGIR PUNTO',
      ruta: 'ElegirP',
      img: '../assets/elegir.png',
      descripcion: 'Escoge un punto en el mapa y su Deteminante Ambiental '
    },
    {
      key: '3',
      titulo: 'MAPA DE LA ZONA',
      ruta: 'Mapa',
      img: '../assets/map.png',
      descripcion: 'Mapa del Determinante Ambiental en la zona de interes'
    }
 ]

export default ({navigation}) => {

  return (
    <View style={sty.container}>
      <Text style={sty.title}>
          EXPLORA LOS DETERMINANTES
      </Text>
      <View style={{height:3 , backgroundColor: '#206a5d', width: width*0.7 }} />
      <View style={{height:6}} />
      {items.map( (item, index) =>
          <ItemHU key={index} navigation={navigation} item={item} />
      )}
    </View>
  );

}

