import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import sty from './styles.js'
import { Modal, Map, AceptarPunto } from '../components/index'


export default ({navigation}) => {

  const [posicion, setPosicion] = useState(null)
  const [visibility, setVisibility] = useState(false)

  const obtenerPunto = ({ nativeEvent }) => {
    setPosicion(nativeEvent.coordinate)
    setVisibility(true)
  }

  const ingresaPunto = () => {
    setVisibility(true)
  }

  const elegirPunto = ({ }) => {
     posicion ? navigation.navigate('verDeterm', { location : posicion }) : null;
	 setPosicion(null)
	 setVisibility(false)
  }

  const cerrarModal = ({ }) => {
	 setPosicion(null)
	 setVisibility(false)
  }

   return (
    <View style={sty.container}>

     <Modal visibility={visibility} bajarModal={true} >
        <AceptarPunto onPress={elegirPunto} onPressLeft={cerrarModal} />
     </Modal>

    <View style={styles.mapa}>
      <Map
         posicion={posicion}
         onLongPress={obtenerPunto}
       />
    </View>

    <View style={sty.container}>
        <Text style={sty.subtitle} >
           Manten presionado un punto en el mapa </Text>
        <Text style={sty.subtitle} >
           O ingresa sus coordinadas {':'} </Text>
         <TouchableOpacity
           style={sty.button}
           onPress={ingresaPunto} >
               <Text style={sty.subtitle}>
               INGRESA COORDENADA</Text>
         </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapa: {
    flex: 5,
  },
});

