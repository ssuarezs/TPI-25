import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pagina del Listado</Text>
      <Button title="Determ Ubicacion" onPress={() => navigation.navigate("verDeterm")} />
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
