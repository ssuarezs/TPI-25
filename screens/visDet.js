import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import Map from './components/Map' 
import Modal from './components/modal' 
import Input from './components/input' 
import Incendios from '../Determi/incendios/mapIncendio' 

export default ({navigation}) => {

  const location = navigation.getParam('location')

  const [nombre, setNombre] = useState('')
  const [puntos, setPuntos] = useState([])
  const [posicion, setPosicion] = useState({ latitude: 0, longitude: 0, })
  const [mVisibility, setMVisibility] = useState(false)

  const [resultado, setResultado] = useState('')
  
  const confResultado = (text) => {
    setResultado(text)
  }
 
  const obtenerPuntos = async () => {
    const obtenidos = await AsyncStorage.getItem('listaPuntos2')
    const listaPuntos= JSON.parse(obtenidos)
    if(listaPuntos !== null){
      setPuntos(listaPuntos)
    }
  }

  const submitPuntos = async () => {
    const newPuntos = [{coordinate: posicion, name: nombre}]
    const treta= puntos.concat(newPuntos)
    const guardados = JSON.stringify(treta)
    await AsyncStorage.setItem(
      'listaPuntos2',
      guardados
    )
    obtenerPuntos()
      console.log('puntos', puntos)
    setNombre('')
    setMVisibility(false)
  }

  const handleName = (text) => {
    setNombre(text)
  }

  useEffect(() => {
    setPosicion({ 
	latitude: location.latitude,
	longitude: location.longitude,
      })
    obtenerPuntos()
      console.log('puntos', puntos)
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
