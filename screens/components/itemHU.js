import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Location from 'expo-location'
import sty from '../styles.js'


export default ({navigation, item}) => {

  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted'){
      return Alert.alert('No tenemos permisos necesarios para acceder a la localizacion')
    }
    const location = await Location.getCurrentPositionAsync({})
     navigation.navigate('verDeterm', { location : location.coords })
  }
  
  const rutaname=item.ruta
  const ruta = () => {   
	  if(rutaname === "HallarP"){
	    buscaLocation()
	  } else if(rutaname === "ElegirP") {
	    navigation.navigate('elegirPunto')
	  } else if(rutaname === "Mapa") {
	    navigation.navigate('MapDeterm')
	  }
	}   

  return (
	<TouchableOpacity 
	  style={styles.item}
	  onPress={ruta}
	>
	  <View style={styles.div}>
	  <View style={styles.center}>
	    <Text style={sty.title} >{item.titulo}</Text>
	    <Text style={styles.subtitle} >{item.descripcion}</Text>
	  </View>
    { (rutaname == 'HallarP') ? <Image style={styles.img} source={require('../assets/ubicacion.png')} /> : null } 
    { (rutaname == 'ElegirP') ? <Image style={styles.img} source={require('../assets/elegir.png')} /> : null } 
    { (rutaname == 'Mapa') ? <Image style={styles.img} source={require('../assets/map.png')} /> : null } 
	  </View>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item : sty.item,
  img : {
    height: 140,
    width: 140,
  },
  container: {  
    flex: 1,
    backgroundColor: '#2ef',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 15,
    alignSelf: 'stretch',
    borderRadius: 20,
    padding: 10,
  },  
  div: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle : {
    flex: 1,
    ...sty.subtitle,
    fontSize: 14,
  },
  text: sty.title,
});
