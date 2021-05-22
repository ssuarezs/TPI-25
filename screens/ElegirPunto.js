import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Map from './components/Map' 

export default ({navigation}) => {

  const [posicion, setPosicion] = useState(null)

  const obtenerPunto = ({ nativeEvent }) => {
    setPosicion(nativeEvent.coordinate)
  }
  

   return (
    <>
    <View style={styles.mapa}>
      <Map 
     posicion={posicion} 
     onLongPress={obtenerPunto}
       />
    </View>
    <View style={styles.container}>
      <Text>Pagina elegir punto</Text>   
     <TouchableOpacity
     onPress={() => {
       if(posicion !== null){
	navigation.navigate('verDeterm', { location : posicion })
       }
     }}
     >
       <Text>Aceptar</Text>
     </TouchableOpacity>   
     <TouchableOpacity
     onPress={() => {
       setPosicion(null)
     }}
     >
       <Text>Cancelar</Text>
     </TouchableOpacity>

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

