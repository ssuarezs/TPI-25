import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, TouchableOpacity } from 'react-native';

export default ({ visibility, children, bajarModal }) => {
  return (
    <Modal
      visible={visibility}
      animationType= "fade"
      transparent={true}
    >
      {bajarModal ? <View style={styles.center}/> : null}
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
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  ModalView: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: Dimensions.get('window').width-100,
    maxWidth: Dimensions.get('window').width-50,
    minHeight: Dimensions.get('window').height-600,
    maxHeight: Dimensions.get('window').height-400,
    backgroundColor: '#f8ede3',
    borderRadius: 10,
    padding: 8,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
