import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity, AsyncStorage, FlatList } from 'react-native';
import ItemLista from '../components/itemListaLug'
import sty from '../styles.js'

export default ({navigation}) => {

  const [puntos, setPuntos] = useState([])

  const obtenerPuntos = async () => {
    const obtenidos = await AsyncStorage.getItem('Puntos')
    const listaPuntos= JSON.parse(obtenidos)
    if(listaPuntos != null){
      setPuntos(listaPuntos)
    }
  }

  useEffect(() => {
    obtenerPuntos()
  }, [puntos])

  return (
    <View style={sty.container}>
      <Text style={{...sty.title, marginTop: 30}} >
          LISTADO DE PUNTOS GUARDADOS ANTERIORMENTE
      </Text>

        {puntos ?
        <View style={styles.containList}>
          <FlatList
            style={styles.list}
            data={puntos}
            keyExtractor={x => x.name}
            renderItem={({item}) =>
              <ItemLista navigation={navigation} item={item} />
            }
          />
        </View>
          :null
        }
    </View>
  );
}

const styles = StyleSheet.create({
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
