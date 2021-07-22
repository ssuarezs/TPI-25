import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { saveLug } from '../reducers/listaL'

import { Modal, Map, Input, GuardarPunto } from '../components/index'
import DetMain from '../Determi/detMain'
import sty from './styles'

const VisScreen = ({ navigation, lista, saveLug }) => {

  const location = navigation.getParam('location')

  const [nombre, setNombre] = useState('')
  const [mVisibility, setMVisibility] = useState(false)
  const [posicion, setPosicion] = useState({
    latitude: 0,
    longitude: 0,
  })

  const handleName = (text) => {
    setNombre(text)
  }
    console.log(location)

    const obtenerFecha = () => {
        const day = new Date().getDate()
        const month = new Date().getMonth()
        const year = new Date().getFullYear()
        const date = `${day}-${month}-${year}`
        return date
    }

  const submitPuntos = async () => {
    const newPunt = {
      coordinate: posicion,
      name: nombre,
      fecha: obtenerFecha(),
      key: Math.random().toString(36)
    }
    saveLug(newPunt)
    setNombre('')
    setMVisibility(false)
    navigation.navigate('Main')
  }

  useEffect(() => { setPosicion({
	latitude: location.latitude,
	longitude: location.longitude,
  })}, [])


   return (
    <View style={sty.container}>
         <Modal visibility={mVisibility}>
            <GuardarPunto
                onSubmit={submitPuntos}
               close={() => {
                   setMVisibility(false)
                   setNombre('')
               }}
                handleName={handleName}
            />
         </Modal>
         <TouchableOpacity style={sty.button}
           onPress={() => {setMVisibility(true)}} >
           <Text style={sty.subtitle}>
               G U A R D A R </Text>
         </TouchableOpacity>
        <View style={sty.mapa}>
          <Map posicion={posicion} />
        </View>
         <DetMain posicion={posicion} />
    </View>
  );
}

const mapStateToProps = state => {
    return { lista: state.listaL }
}

const mapDispatchToProps = dispatch => ({
    saveLug: (lugar) => dispatch(saveLug(lugar)),
})


export default connect(mapStateToProps, mapDispatchToProps)(VisScreen)

