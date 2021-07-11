import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modal } from '../../components/index'
import * as WebBrowser from 'expo-web-browser';
import styles from '../styles'

export const ITEM = ({ D, title }) => {
  return (
	    <TouchableOpacity style={styles.item} onPress={D} >
		<Text style={styles.textI} >{title}</Text>
	    </TouchableOpacity>
  )
}

export const BOO = ({ D, title }) => {
  return (
	    <TouchableOpacity key={title} style={styles.button} onPress={D} >
		<Text style={styles.textB} >{title}</Text>
	    </TouchableOpacity>
  )
}

export const SectionFrame = ({ D, title }) => {
  return (
	    <View key={title} style={styles.seccionFrame} onPress={D} >
        <Text style={styles.titleB} >{title}</Text>
      </View>
  )
}


export const ItemTitle = ({ D, title }) => {
  return (
	    <TouchableOpacity key={title} style={styles.button} onPress={D} >
		<Text style={styles.title} >{title}</Text>
	    </TouchableOpacity>
  )
}

