import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location'
import sty from './styles.js'


export default ({navigation, item}) => {

    const avisoLoc = 'No tenemos permisos necesarios para acceder a la localizacion'

  const buscaLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted'){
      return Alert.alert(avisoLoc)
    }
    const location = await Location.getCurrentPositionAsync({})
     navigation.navigate('verDeterm', {
         location : location.coords
     })
  }

    const rutaname=item.ruta
    const ruta = () => {
        switch(rutaname){
            case 'HallarP':
                buscaLocation()
            break
            case 'ElegirP':
                navigation.navigate('elegirPunto')
            break
            case 'Mapa':
                navigation.navigate('MapDeterm')
            break
        }
    }

    const icono = () => {
        let Isource
        switch(rutaname){
            case 'HallarP':
                Isource = require('../assets/ubicacion.png')
            break
            case 'ElegirP':
                Isource = require('../assets/elegir.png')
            break
            case 'Mapa':
                Isource = require('../assets/map.png')
            break
        }
        return <Image style={sty.img} source={Isource} />
    }

  return (
	<TouchableOpacity key={item.title} style={sty.item} onPress={ruta} >
	  <View key={item.title}  style={sty.rowView}>
          <View style={sty.center}>
            <Text style={sty.title} >{item.titulo}</Text>
            <Text style={sty.subtitle}>
              {item.descripcion}
            </Text>
          </View>
          {icono()}
	  </View>
	</TouchableOpacity>
  );
}

