import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pagina de la info Determinantes</Text>
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
