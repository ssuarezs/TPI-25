import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Modal, Map, AceptarPunto } from './components/index'

import sty from './styles.js'

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
       if(posicion !== null){
	    navigation.navigate('verDeterm', { location : posicion })
	 }
	 setPosicion(null)
	 setVisibility(false)
  }

  const cerrarModal = ({ }) => {
	 setPosicion(null)
	 setVisibility(false)
  }

   return (
    <>

     <Modal visibility={visibility} >
       <AceptarPunto onPress={elegirPunto} onPressLeft={cerrarModal}/>
     </Modal>

    <View style={styles.mapa}>
      <Map
         posicion={posicion}
         onLongPress={obtenerPunto}
       />
    </View>

    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={sty.subtitle} > Manten presionado un punto en el mapa </Text>
        <Text style={sty.subtitle} > O ingresa sus coordinadas {':'} </Text>
         <TouchableOpacity style={styles.ingPunto} onPress={ingresaPunto} >
           <Text style={sty.subtitle}>INGRESA COORDENADA</Text>
         </TouchableOpacity>
       </View>
     </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    ...sty.container,
    paddingBottom: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapa: {
    flex: 5,
  },
  ingPunto: {
    flex: 1.5,
    backgroundColor: '#81b214',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width-120,
    margin: 10,
    borderRadius: 5,
  },

});

