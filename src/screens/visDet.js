import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { saveLug } from '../reducers/listaL'

import { Modal, Map, Input, GuardarPunto } from '../components/index'
import { Entypo } from '@expo/vector-icons';
import DetMain from '../Determi/detMain'
import sty from './styles'
const {width, height} = Dimensions.get('screen');

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
       <View style={{
            width: width,
            height: width*0.14,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 4,
            paddingHorizontal: 15,
            marginBottom: 5,
       }}>
            <TouchableOpacity onPress={()=> navigation.goBack()} >
                <Entypo name="chevron-left" size={35} color="#206a5d" />
            </TouchableOpacity>
            <Text style={sty.subtitle}>EXPLORANDO</Text>
            <View style={{alignItems: 'center'}} >
                <Entypo name="save" size={30} color="white" />
            </View>
        </View>
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
         <DetMain posicion={posicion} modalVis={() => setMVisibility(true)} />
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

