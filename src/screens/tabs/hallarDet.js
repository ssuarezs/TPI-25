import React from 'react';
import { View, Text } from 'react-native';
import sty from './styles'
import { ItemHU } from '../../components/index';

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
      {items.map( i =>
          <ItemHU navigation={navigation} item={i} />
      )}
    </View>
  );

}

