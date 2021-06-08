import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Dimensions, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import info from './info.json' 


const BOO = ({ D, title }) => {
  return (       
	    <TouchableOpacity style={styles.button} onPress={D} >
		<Text style={styles.textB} >{title}</Text>
	    </TouchableOpacity>
  )
}

export default ({ resDeter, onPress }) => {
   
  const [ley, setLey]=useState('')
  const [visible, setVisible]=useState(false)
  const le = (x) => {
      setLey(info.Leyes[x])
    setVisible(true)
  }


  const URL = (url) => {
    WebBrowser.openBrowserAsync(url);
  }

  return (
    <View style={styles.center}>
    <ScrollView style={styles.scroll}>
	<Text style={styles.title} >{info.titulo}</Text>
	<Text style={styles.subtitle} >Nivel de Riesgo{':'}</Text>
	<Text style={styles.subtitle} >{resDeter}</Text>
	  <View style={styles.space} />
	<Text style={styles.parraf} >{info.parrafos[0]}</Text>
	<Text style={styles.parraf} >{info.parrafos[1]}</Text>
	<Text style={styles.parraf} >{info.parrafos[2]}</Text>
	  <View style={styles.space} />
	<Text style={styles.subtitle} >LEYES Y NORMAS RELACIONADAS</Text>
	  <View style={styles.space} />       
	  <View style={styles.div}>       
	  <View style={{flex: 1}} >       
	<BOO title={info.Leyes[0].titulo} D={() => {le(0)}} />
	<BOO title={info.Leyes[1].titulo} D={() => {le(1)}} />
	<BOO title={info.Leyes[2].titulo} D={() => {le(2)}} />
	  </View>
	  <View style={{flex: 1}} >       
	<BOO title={info.Leyes[3].titulo} D={() => {le(3)}} />
	<BOO title={info.Leyes[4].titulo} D={() => {le(4)}} />
	<BOO title={info.Leyes[5].titulo} D={() => {le(5)}} />
	  </View>
	  </View>
	  <View style={styles.space} />
	<Text style={styles.subtitle} >{ley.titulo}</Text>
	<Text style={styles.parraf} >{ley.contenido}</Text>
	  <View style={styles.space} />
	<Text style={styles.subtitle} >RECURSOS DISPONIBLES EN INTERNET</Text>
	  <View style={styles.space} />
	<BOO title={info.Recursos[0].titulo} D={() => {URL(info.Recursos[0].link)}} />
	<BOO title={info.Recursos[1].titulo} D={() => {URL(info.Recursos[1].link)}} />
	<BOO title={info.Recursos[2].titulo} D={() => {URL(info.Recursos[2].link)}} />
	<BOO title={info.Recursos[3].titulo} D={() => {URL(info.Recursos[3].link)}} />
	<BOO title={info.Recursos[4].titulo} D={() => {URL(info.Recursos[4].link)}} />
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
    borderRadius: 8,
  },
  scroll: {
    padding: 5,
  },
  parraf: {
    padding: 8,
    paddingLeft: 20,
    textAlign: 'justify',
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
  space: {
    height: 30,
  },
  button: {
    margin: 10,
    backgroundColor: '#81b214',
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 5,
  },
  textB: {
    fontSize: 12,
    textAlign: 'center',
  },
  div: {
    flexDirection: 'row'
  }
}); 
 
