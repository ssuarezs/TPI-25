import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, AsyncStorage } from 'react-native';

import { Modal, Map, Input } from './components/index' 
import Incendios from '../Determi/incendios/mapIncendio' 

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
    <>
     <Modal visibility={mVisibility}>   
       <Text>Quieres guardar este Punto?</Text>
	<Input title="Nombre Punto" placeholder="Escribe nombre..." onChangeText={handleName}  />
     <TouchableOpacity onPress={submitPuntos} >
       <Text>Aceptar</Text>
     </TouchableOpacity>   
     <TouchableOpacity onPress={() => {setMVisibility(false)}} >
       <Text>Cancelar</Text>
     </TouchableOpacity>
     </Modal>
    <View style={styles.guardar}> 
     <TouchableOpacity onPress={() => {setMVisibility(true)}} >
       <Text>Guardar Punto</Text>
     </TouchableOpacity>
    </View>
    <View style={styles.mapa}>
      <Map posicion={posicion} >
     <Incendios posicion={posicion} confResultado={confResultado} />
     </Map>
    </View>
    <View style={styles.container}>
      <Text>Pagina Visualizar Determinantes</Text>
      <Text>{resultado}</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapa: {
    flex: 6,
  },
  guardar: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
