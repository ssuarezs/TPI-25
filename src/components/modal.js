import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, TouchableOpacity } from 'react-native';

export default ({ visibility, children, bajarModal, subirModal }) => {
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
      {subirModal ? <View style={styles.center}/> : null}
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
    maxWidth: Dimensions.get('window').width-30,
    minHeight: Dimensions.get('window').height-600,
    maxHeight: Dimensions.get('window').height-80,
    backgroundColor: '#f8ede3',
    borderRadius: 40,
    padding: 8,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
