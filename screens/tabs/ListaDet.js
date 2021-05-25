import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, AsyncStorage, FlatList } from 'react-native';

export default ({navigation}) => {

  const [puntos, setPuntos] = useState([])
  const obtenerPuntos = async () => {
    const obtenidos = await AsyncStorage.getItem('Puntos')
    const listaPuntos= JSON.parse(obtenidos)
    if(listaPuntos !== null){
      setPuntos(listaPuntos)
    }
  }

  useEffect(() => {
    obtenerPuntos()
  }, [puntos])
  
  return (
    <View style={styles.container}>
      <Text>Pagina del Listado</Text>
    {puntos ?
      <>
	<FlatList 
      data={puntos} 
      keyExtractor={x => x.name}
      renderItem={({item}) => 
	<View>
	<Text>{item.name}</Text>
	<Text>	{item.coordinate.latitude}</Text>
	<Text>	{item.coordinate.longitude}</Text>
	</View>
      }
	/>
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
