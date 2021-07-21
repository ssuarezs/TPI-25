import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import sty from './styles'

export default ({title, ...rest}) => {
  return (
    <View style={styles.wrapper}>
    <Text style={[sty.subtitle, {left: 0}]}>{title}</Text>
    <TextInput {...rest} />
    <View style={{backgroundColor:'grey', height: 2, width: 200}} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 60,
    alignItems: 'center'
  },
})
