import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location'


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
	  style={styles.container}
	  onPress={ruta}
	>
	  <Text style={styles.text} >{item.titulo}</Text>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cef',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 15,
    alignSelf: 'stretch',
    borderRadius: 20,
    padding: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  }
});
