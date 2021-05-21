import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pagina del Mapa Determinantes</Text>
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
