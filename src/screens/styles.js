
import { StatusBar } from 'expo-status-bar';
import { Dimensions, NativeModules, } from 'react-native'
const {width, height} = Dimensions.get('screen');
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = StatusBarManager.HEIGHT;

const verdeO = '#206a5d'
const verde = '#80B314'
const cian = '#3ecc90'
const azul = '#4c73c2'
const rojo = '#c25a48'
const naranja = '#cc9e39'

const styles = {
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: STATUSBAR_HEIGHT,
  },
  center : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  item : {
    flex: 1,
    backgroundColor: verde,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 15,
    marginBottom: 0,
    alignSelf: 'stretch',
    borderRadius: 20,
    padding: 20,
  },
  button: {
    flex: 1.5,
    backgroundColor: verde,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 10,
    paddingHorizontal: 10,
  },
  title : {
    textAlign: 'center',
    color: verdeO,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle : {
    color: verdeO,
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 5,
    paddingLeft: 5,
  },
  mapa: {
    flex: 6,
  },
};

export default styles
