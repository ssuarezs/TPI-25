import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Map from './components/Map' 
import Modal from './components/modal' 

export default ({navigation}) => {


  const [posicion, setPosicion] = useState(null)
  const [visibility, setVisibility] = useState(false)

  const obtenerPunto = ({ nativeEvent }) => {
    setPosicion(nativeEvent.coordinate)
    setVisibility(true)
  }

  

   return (
    <>
    <View style={styles.mapa}>
      <Map 
	 posicion={posicion} 
	 onLongPress={obtenerPunto}
       />
     <Modal visibility={visibility} >
	    <>
	      <Text>Este es el modal</Text>      
	     <TouchableOpacity
	     onPress={() => {
	       if(posicion !== null){
		navigation.navigate('verDeterm', { location : posicion })
	       }
	       setPosicion(null)
	       setVisibility(false)
	     }}
	     >
	       <Text>Aceptar</Text>
	     </TouchableOpacity>   
	     <TouchableOpacity
	     onPress={() => {
	       setPosicion(null)
	       setVisibility(false)
	     }}
	     >
	       <Text>Cancelar</Text>
	     </TouchableOpacity>
	  </>
     </Modal>
    </View>
    <View style={styles.container}>
      <Text>Pagina elegir punto</Text> 
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
    flex: 5,
  }
});

