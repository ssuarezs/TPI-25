import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { saveLug } from '../reducers/listaL'

import { Modal, Map, Input } from '../components/index'
import DetMain from '../Determi/detMain'
import sty from './styles'

const VisScreen = ({ navigation, lista, saveLug }) => {

  const location = navigation.getParam('location')

  const [nombre, setNombre] = useState('')
  const [resultado, setResultado] = useState('')
  const [mVisibility, setMVisibility] = useState(false)
  const [posicion, setPosicion] = useState({
    latitude: 0,
    longitude: 0,
  })

  const confResultado = (text) => {
    setResultado(text)
  }

  const handleName = (text) => {
    setNombre(text)
  }

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
  }

  useEffect(() => { setPosicion({
	latitude: location.latitude,
	longitude: location.longitude,
  })}, [])


   return (
    <View style={sty.container}>
         <Modal visibility={mVisibility}>
           <Text>Quieres guardar este Punto?</Text>
        <Input title="Nombre Punto" placeholder="Escribe nombre..." onChangeText={handleName}  />
         <TouchableOpacity onPress={submitPuntos} >
           <Text>Aceptar</Text>
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => {setMVisibility(false)}} >
           <Text>Cancelar</Text>
         </TouchableOpacity>
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

