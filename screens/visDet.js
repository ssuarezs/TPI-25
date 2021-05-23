import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import Map from './components/Map' 

export default ({navigation}) => {

  const location = navigation.getParam('location')
  const posicion = {
    latitude: location.latitude,
    longitude: location.longitude,
  }

   return (
    <>
    <View style={styles.guardar}>
     <TouchableOpacity onPress={async () => {
       await AsyncStorage.setItem(
	 '@my-app:puntosguardados',
	 JSON.stringify(posicion)
       );
       const puntos = await AsyncStorage.getItem('@my-app:puntosguardados')
     }} >
     <Text>Guardar Punto</Text>
     </TouchableOpacity>
    </View>
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
    flex: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa: {
    flex: 6,
  },
  guardar: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
