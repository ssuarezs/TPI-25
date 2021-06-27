import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Modal } from '../../components/index'

import * as WebBrowser from 'expo-web-browser';
import hallarDet from './hallarDet'

import info from './info.json'


const ITEM = ({ D, title }) => {
  return (
	    <TouchableOpacity style={styles.item} onPress={D} >
		<Text style={styles.textI} >{title}</Text>
	    </TouchableOpacity>
  )
}

const BOO = ({ D, title }) => {
  return (
	    <TouchableOpacity style={styles.button} onPress={D} >
		<Text style={styles.textB} >{title}</Text>
	    </TouchableOpacity>
  )
}

export default ({ posicion }) => {

  const resDeter = hallarDet(posicion);

  const [ley, setLey]=useState({
    titulo: 'SELECCIONAR LEY'
  })
  const [visible, setVisible]=useState(false)
  const configLey = (x) => {
      setLey(info.Leyes[x])
      setVisible(false)
  }

  const URL = (url) => {
    WebBrowser.openBrowserAsync(url);
  }


  return (
    <View style={styles.center}>

    <Modal visibility={visible}>
	<FlatList
	  style={styles.FlatList}
	  data={info.Leyes}
	  keyExtractor={x => x.titulo}
	  renderItem={({item}) => (
	    <ITEM title={item.titulo} D={() => {configLey(item.num)}} />
	)}
	/>
    </Modal>

	<Text style={styles.subtitle} >NIVEL DE AMENAZA{':'} {resDeter}</Text>

    <ScrollView style={styles.scroll}>

	  <View style={styles.section}>
        { info.parrafos[0] ? <Text style={styles.parraf} >{info.parrafos[0]}</Text> : null }
        { info.parrafos[1] ? <Text style={styles.parraf} >{info.parrafos[1]}</Text> : null }
        { info.parrafos[2] ? <Text style={styles.parraf} >{info.parrafos[2]}</Text> : null }
	  </View>

	  <View style={styles.section}>
        <Text style={styles.subtitle} >TIPOS DE MOVIMIENTOS DE MASA</Text>
        { info.tipos[0] ? <Text style={styles.parraf} >{info.tipos[0]}</Text> : null }
        { info.tipos[1] ? <Text style={styles.parraf} >{info.tipos[1]}</Text> : null }
        { info.tipos[2] ? <Text style={styles.parraf} >{info.tipos[2]}</Text> : null }
        { info.tipos[3] ? <Text style={styles.parraf} >{info.tipos[3]}</Text> : null }
	  </View>

	  <View style={styles.section}>
	<Text style={styles.subtitle} >CLASIFICACION DE LA AMENAZA</Text>
        { info.clasif[0] ? <Text style={styles.parraf} >{info.clasif[0]}</Text> : null }
        { info.clasif[1] ? <Text style={styles.parraf} >{info.clasif[1]}</Text> : null }
        { info.clasif[2] ? <Text style={styles.parraf} >{info.clasif[2]}</Text> : null }
	  </View>

	  <View style={styles.section}>
	<Text style={styles.subtitle} >LEYES Y NORMAS RELACIONADAS</Text>
	  <View style={styles.space} />
        <BOO title={ley.titulo} D={() => {setVisible(true)}} />
        { ley.contenido  ? <Text style={styles.parraf} >{ley.contenido}</Text> : null }
        { ley.contenido2 ? <Text style={styles.parraf} >{ley.contenido2}</Text> : null }
        { ley.contenido3 ? <Text style={styles.parraf} >{ley.contenido3}</Text> : null }
	  </View>

	  <View style={styles.section}>
	<Text style={styles.subtitle} >RECURSOS DISPONIBLES EN INTERNET</Text>
	  <View style={styles.space} />
        <BOO title={info.Recursos[0].titulo} D={() => {URL(info.Recursos[0].link)}} />
        <BOO title={info.Recursos[1].titulo} D={() => {URL(info.Recursos[1].link)}} />
	  </View>

	  <View style={styles.space} />
	  <View style={styles.space} />
    </ScrollView>
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
    margin: 2,
  },
  scroll: {
    marginTop: 10,
    padding: 5,
    borderColor: '#ffcc29',
    borderTopWidth: 4,
  },
  parraf: {
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 12,
    textAlign: 'justify',
    color: '#206a5d',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
    paddingBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
    marginLeft: 20,
    marginRight: 20,
  },
  textA: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffcc29',
  },
  textB: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
  },
  space: {
    height: 15,
  },
  button: {
    margin: 10,
    backgroundColor: '#81b214',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  button2: {
    margin: 10,
    height: 65,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#206a5d',
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
    alignSelf: 'stretch',
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#206a5d',
    borderWidth: 4,
    borderRadius: 20,
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

});

