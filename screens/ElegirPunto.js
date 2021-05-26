import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Modal, Map, AceptarPunto } from './components/index' 

export default ({navigation}) => {

  const [posicion, setPosicion] = useState(null)
  const [visibility, setVisibility] = useState(false)

  const obtenerPunto = ({ nativeEvent }) => {
    setPosicion(nativeEvent.coordinate)
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

    <View style={styles.mapa}>

      <Map 
	 posicion={posicion} 
	 onLongPress={obtenerPunto}
       />

     <Modal visibility={visibility} >
       <AceptarPunto onPress={elegirPunto} onPressLeft={cerrarModal}/>
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

