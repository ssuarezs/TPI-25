import React, { useState } from 'react';
import DetIncendio from './incendios/verInfo'
import DetMovMasa from './movMasa/verInfo'

import { StyleSheet, View, Dimensions, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Modal } from '../components/index'


  const ITEM = ({ D, title }) => {
    return (
	      <TouchableOpacity style={styles.item} onPress={D} >
		  <Text style={styles.textI} >{title}</Text>
	      </TouchableOpacity>
    )
  }



export default ({ posicion }) => {

  const [determ, setDeterm] = useState(0)
  const [detE, setDetE] = useState('SELECCIONAR DETERMINANTE AMBIENTAL')
  const [visible, setVisible] = useState(false)

  const dets = [
    {
      'titulo' : 'RIESGO DE INCENDIO',
      'num' : 1,
    },
    {
      'titulo' : 'AMENAZA POR MOVIMIENTO DE MASAS',
      'num' : 2,
    },
  ]

  return (
    <View style={styles.center}>

	<Modal visibility={visible}>
	    <FlatList
	      style={styles.FlatList}
	      data={dets}
	      keyExtractor={x => x.titulo}
	      renderItem={({item}) => (
            <ITEM title={item.titulo} D={() => {
              setDeterm(item.num)
              setDetE(item.titulo)
              setVisible(false)
		}} />
	    )}
	    />
	</Modal>

      <TouchableOpacity style={styles.button} onPress={() => {setVisible(true)}}  >
        <Text style={styles.title} >{detE}</Text>
      </TouchableOpacity>

	{(determ == 1) ? <DetIncendio posicion={posicion} /> : null  }
	{(determ == 2) ? <DetMovMasa posicion={posicion} /> : null  }

    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 5,
    margin: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffcc29',
  },
  button: {
    marginBottom: 5,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#206a5d',
    borderRadius: 10,
    width: Dimensions.get('window').width-20,
  },
  item: {
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: '#206a5d',
  },
  textI: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8ede3',
    height: 460,
    padding: 15,
    margin: 35,
    borderRadius: 20,
  },
  FlatList: {
    alignSelf: 'stretch'
  },


});

