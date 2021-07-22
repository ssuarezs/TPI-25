import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import sty from './styles.js'
import { Modal, Map, AceptarPunto, IngresarCoord } from '../components/index'


export default ({navigation}) => {

  const [posicion, setPosicion] = useState(null)
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)

  const [visibility, setVisibility] = useState(false)
  const [tipoModal, setTipoModal] = useState(true)

  const handleLat = (coord) => {
    setLat(coord)
  }
  const handleLong = (coord) => {
    setLong(coord)
  }

  const obtenerPunto = ({ nativeEvent }) => {
    setPosicion(nativeEvent.coordinate)
    setTipoModal(true)
    setVisibility(true)
  }

  const ingresaPunto = () => {
    setTipoModal(false)
    setVisibility(true)
  }

  const elegirPunto = () => {
     posicion ? navigation.navigate('verDeterm', { location : posicion }) : null;
	 setPosicion(null)
	 setVisibility(false)
  }

  const registraCoord = () => {
     setPosicion({
        latitude: parseFloat(lat),
        longitude: parseFloat(long),
     })
     setTipoModal(true)
  }

  const cerrarModal = ({ }) => {
	 setPosicion(null)
	 setVisibility(false)
  }

   return (
    <View style={sty.container}>
       {tipoModal ?
         <Modal visibility={visibility} bajarModal={true} >
            <AceptarPunto onPress={elegirPunto} onPressLeft={cerrarModal} />
         </Modal>
         : <Modal visibility={visibility} >
            <IngresarCoord
               onSubmit={registraCoord}
               handleLong={handleLong}
               handleLat={handleLat}
               close={cerrarModal}
            />
         </Modal>
       }
        <View style={styles.mapa}>
            <Map posicion={posicion} onLongPress={obtenerPunto} />
        </View>
        <View style={sty.container}>
            <Text style={sty.subtitle} > Manten presionado un punto en el mapa </Text>
            <Text style={sty.subtitle} > O ingresa sus coordinadas {':'} </Text>
            <TouchableOpacity style={sty.button} onPress={ingresaPunto} >
                <Text style={sty.subtitle}>INGRESA COORDENADA</Text>
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

