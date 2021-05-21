import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Pagina de los determinantes</Text>
      <Button title="Determ Ubicacion" onPress={() => navigation.navigate("verDeterm")} />
      <Button title="Elegir Ubicacion" onPress={() => navigation.navigate("elegirPunto")} />
      <Button title="Mapa Determinantes" onPress={() => navigation.navigate("MapDeterm")} />
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
