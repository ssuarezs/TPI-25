import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('screen')
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
    padding: 5,
    paddingTop: 20,
    paddingBottom: 120,
    backgroundColor: 'white',
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item : {
    flex: 1,
    backgroundColor: verde,
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: 8,
    marginHorizontal: 10,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    top: 5,
  },
  deletemark : {
    flex: 0.2,
    backgroundColor: verde,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  button : {
    flex: 1,
    backgroundColor: verde,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 15,
    marginBottom: 0,
    padding: 10,
    borderRadius: 20,
  },
  title : {
    color: verdeO,
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitle : {
    color: verdeO,
    fontWeight: 'bold',
    fontSize: 12,
    left: 10,
  },
  buttonText : {
    color: verdeO,
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 5,
  },
  img : {
    flex: 1,
    height: width/3,
    width: width/3,
  },
};

export default styles
