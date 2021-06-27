import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity, AsyncStorage } from 'react-native';

import { Modal, Map, Input } from '../components/index'
import DetMain from '../Determi/detMain'
import sty from './styles'

export default ({navigation}) => {

  const location = navigation.getParam('location')

  const [nombre, setNombre] = useState('')
  const [resultado, setResultado] = useState('')
  const [puntos, setPuntos] = useState([])
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

  const obtenerPuntos = async () => {
    const obtenidos = await AsyncStorage.getItem('Puntos')
    const listaPuntos= JSON.parse(obtenidos)
    if(listaPuntos !== null){
      setPuntos(listaPuntos)
    }
      // listaPuntos ? setPuntos(listaPuntos) : null
  }


  const submitPuntos = async () => {
    const newPuntos = [{
      coordinate: posicion,
      name: nombre
    }]
    const treta= puntos.concat(newPuntos)
    const guardados = JSON.stringify(treta)
    await AsyncStorage.setItem(
      'Puntos',
      guardados
    )
    obtenerPuntos()
    setNombre('')
    setMVisibility(false)
  }

  useEffect(() => {
    setPosicion({
	latitude: location.latitude,
	longitude: location.longitude,
      })
    obtenerPuntos()
  }, [])


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
               G U A R D A R   P U N T O</Text>
         </TouchableOpacity>
        <View style={sty.mapa}>
          <Map posicion={posicion} />
        </View>
         <DetMain posicion={posicion} />
    </View>
  );
}
