import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, TouchableOpacity } from 'react-native';

export default ({ visibility, children }) => {
  return (
    <Modal 
      visible={visibility}
      animationType= "fade"
      transparent={true}
    >
      <View style={styles.center}>
      <View style={styles.ModalView}>    
	{children}
      </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  ModalView: {
    minWidth: Dimensions.get('window').width-100,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
