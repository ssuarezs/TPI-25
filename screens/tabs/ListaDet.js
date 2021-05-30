import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity, AsyncStorage, FlatList } from 'react-native';
import sty from '../styles.js'

export default ({navigation}) => {

  const [puntos, setPuntos] = useState([])

  const obtenerPuntos = async () => {
    const obtenidos = await AsyncStorage.getItem('Puntos')
    const listaPuntos= JSON.parse(obtenidos)
    if(listaPuntos !== null){
      setPuntos(listaPuntos)
    }
  }

  const irLocacion = (item) => {
     navigation.navigate('verDeterm', {
       location : item.coordinate 
     })
  }

  useEffect(() => {
    obtenerPuntos()
  }, [puntos])
  
  return (
    <View style={styles.container}>
      <Text>Pagina del Listado</Text>
    <View style={styles.containList}>
    {puntos ?
      <>
	<FlatList 
      style={styles.list}
      data={puntos} 
      keyExtractor={x => x.name}
      renderItem={({item}) => 
	<>
	<TouchableOpacity style={styles.item} onPress={() => { 
	   navigation.navigate('verDeterm', {
	     location : item.coordinate 
	   })
	}} >
	<Text>{item.name}</Text>
	<Text>	{item.coordinate.latitude}</Text>
	<Text>	{item.coordinate.longitude}</Text>
	</TouchableOpacity>
	</>
      }
	/>
      </>
      :null 
    }
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: sty.container,
  tabsNav: {
    flex: 0.15,
  },
  item: {
    borderBottomWidth: 3,
    borderColor: '#222'
  },
  list: {
    alignSelf: 'stretch',
  },
  containList: {  
    alignSelf: 'stretch',
    padding: 5,
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
    borderColor:'#222',
    borderWidth: 1,
  }
});
