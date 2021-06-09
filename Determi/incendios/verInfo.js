import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import info from './info.json' 
import { Modal } from '../../screens/components/index'


const BUU = ({ D, title }) => {
  return (       
	    <TouchableOpacity style={styles.button2} onPress={D} >
		<Text style={styles.textA} >{title}</Text>
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

export default ({ resDeter, onPress }) => {
   
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
      <View style={styles.list}>
	<FlatList 
	  data={info.Leyes}
	  keyExtractor={x => x.titulo}
	  renderItem={({item}) => (
	    <BUU title={item.titulo} D={() => {configLey(item.num)}} />
	)}
	/>
       </View>
    </Modal>

	<Text style={styles.title} >{info.titulo}</Text>

    <ScrollView style={styles.scroll}>

	<Text style={styles.subtitle} >Nivel de Riesgo{':'}</Text>
	<Text style={styles.subtitle} >{resDeter}</Text>

	  <View style={styles.section}>
	<Text style={styles.parraf} >{info.parrafos[0]}</Text>
	<Text style={styles.parraf} >{info.parrafos[1]}</Text>
	<Text style={styles.parraf} >{info.parrafos[2]}</Text>
	  </View>

	  <View style={styles.section}>
	<Text style={styles.subtitle} >LEYES Y NORMAS RELACIONADAS</Text>
	  <View style={styles.space} />
	<BOO title={ley.titulo} D={() => {setVisible(true)}} />
	<Text style={styles.parraf} >{ley.contenido}</Text>
	  </View>

	  <View style={styles.section}>
	<Text style={styles.subtitle} >RECURSOS DISPONIBLES EN INTERNET</Text>
	  <View style={styles.space} />
	<BOO title={info.Recursos[0].titulo} D={() => {URL(info.Recursos[0].link)}} />
	<BOO title={info.Recursos[1].titulo} D={() => {URL(info.Recursos[1].link)}} />
	<BOO title={info.Recursos[2].titulo} D={() => {URL(info.Recursos[2].link)}} />
	<BOO title={info.Recursos[3].titulo} D={() => {URL(info.Recursos[3].link)}} />
	<BOO title={info.Recursos[4].titulo} D={() => {URL(info.Recursos[4].link)}} />
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
    margin: 8,
  },
  scroll: {
    padding: 5,
    borderColor: '#ffcc29',
    borderTopWidth: 4,
  },
  parraf: {
    padding: 8,
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
    fontSize: 16,
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
  section: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#206a5d',
    borderWidth: 4,
    borderRadius: 20,
  }
}); 
 
