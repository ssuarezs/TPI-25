import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

export default ({navigation}) => {

  const [puntos, setPuntos] = useState()
  const [data, setData] = useState()

  const obtenerPuntos = async () => { 
    const obtenidos = await AsyncStorage.getItem('@my-app:puntosguardados')
    const d = JSON.parse(obtenidos)
    setPuntos(obtenidos)
    setData(d)
  }

  useEffect(() => {
    obtenerPuntos()
  }, [data])

  
  return (
    <View style={styles.container}>
      <Text>Pagina del Listado</Text>
    {data ?
      <>
      <Text>Latitud : {data.latitude}</Text>
      <Text>Longitud : {data.longitude}</Text>
      </>
      :null 
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
