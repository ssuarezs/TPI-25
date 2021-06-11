import React, { useState } from 'react';
import { hallarDet, Det } from './incendios/index' 

import { StyleSheet, View, Dimensions, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Modal } from '../screens/components/index'


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

	<Text style={styles.title} onPress={() => {setVisible(true)}} >{detE}</Text>

	{(determ == 1) ? <Det posicion={posicion} /> : null  }

    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
    margin: 8,
  },   
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
  },
  item: { 
    padding: 5,
    margin: 10,
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
 
