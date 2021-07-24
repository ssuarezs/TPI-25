import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    NativeModules,
} from 'react-native';
import sty from './styles.js'
import { Modal, Map, AceptarPunto, IngresarCoord } from '../components/index'
import { Entypo } from '@expo/vector-icons';

const {width, height} = Dimensions.get('screen');
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;


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
       <View style={{
            width: width,
            height: width*0.14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
       }}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Entypo name="chevron-left" size={35} color="#206a5d" />
            </TouchableOpacity>
            <Text style={sty.subtitle}>ELIGE TU PUNTO DE INTERES</Text>
            <Entypo name="chevron-left" size={35} color="white" />
       </View>
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
        <View style={sty.center}>
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

