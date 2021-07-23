import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, TouchableOpacity } from 'react-native';

export default ({ visibility, children, bajarModal, subirModal }) => {
  return (
    <Modal
      position='absolute'
      visible={visibility}
      animationType= "slide"
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
    minWidth: Dimensions.get('screen').width-150,
    maxWidth: Dimensions.get('screen').width-30,
    minHeight: Dimensions.get('screen').width-150,
    maxHeight: Dimensions.get('screen').height-120,
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 8,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
