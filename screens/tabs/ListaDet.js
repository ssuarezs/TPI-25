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
      <Text style={{...sty.title, marginTop: 30}} >LISTADO DE PUNTOS GUARDADOS ANTERIORMENTE</Text>
    {puntos  ?
	<View style={styles.containList}>
	  <FlatList 
	style={styles.list}
	data={puntos} 
	keyExtractor={x => x.name}
	renderItem={({item}) => 
	  <>
	  <TouchableOpacity style={sty.item} onPress={() => { 
	     navigation.navigate('verDeterm', {
	       location : item.coordinate 
	     })
	  }} >
	  <Text style={sty.title} > Nombre {':'} {item.name}</Text>
	  <Text style={sty.subtitle} > Lat {':'} {item.coordinate.latitude}</Text>
	  <Text style={sty.subtitle} > Long {':'} {item.coordinate.longitude}</Text>
	  </TouchableOpacity>
	  </>
	}
	  />
	</View>
      :null 
    }
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
    marginTop: 15,
    marginBottom: 30,
    borderColor : '#ffcc29',
    borderBottomWidth : 3,
    borderTopWidth : 3,
  }
});
