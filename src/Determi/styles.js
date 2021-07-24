import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('screen')
const verdeO = '#206a5d'
const verde = '#80B314'
const cian = '#3ecc90'
const azul = '#4c73c2'
const rojo = '#c25a48'
const naranja = '#cc9e39'

const styles = {
    center: {
    flex: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 8,
    marginBottom: 8,
    },
    titleB: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: naranja,
    },
    buttonB: {
    marginBottom: 5,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: verdeO,
    borderRadius: 20,
    width: Dimensions.get('window').width-30,
    },
    item: {
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 4,
    borderColor: verdeO,
    },
    textI: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: verdeO,
    },
    FlatList: {
    alignSelf: 'stretch',
    paddingHorizontal: 5,
    },
    scroll: {
    alignSelf: 'stretch',
    },
    parraf: {
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 12,
    textAlign: 'justify',
    color: verdeO,
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: verdeO,
    paddingBottom: 10,
    },
    subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: verdeO,
    marginLeft: 10,
    marginRight: 10,
    },
    textA: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: naranja,
    },
    textB: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: verdeO,
    },
    textC: {
    marginLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
    color: verdeO,
    },
    textD: {
    fontSize: 14,
    fontWeight: 'bold',
    color: verdeO,
    marginHorizontal: 4,
    },
    space: {
    height: 15,
    },
    button: {
    backgroundColor: verde,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 15,
    paddingHorizontal: 10,
    margin: 10,
    marginTop: 0,
    },
    button2: {
    margin: 10,
    height: 65,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 5,
    backgroundColor: verdeO,
    },
    list: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 460,
    padding: 15,
    margin: 35,
    borderRadius: 20,
    },
    section: {
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: verdeO,
    borderWidth: 4,
    borderRadius: 20,
    },
    seccionFrame: {
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 5,
    width: Dimensions.get('window').width-100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: verdeO,
    borderRadius: 20,
    alignSelf: 'center',
    },
    mapImage: {
        resizeMode: 'cover',
        width: width,
        height: height*0.65,
        margin: 10,
        borderRadius: 20,
    },
    image: {
        width:width*0.8,
        height: width*0.4,
        resizeMode:'cover',
    },
    centro: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
    },
};

export default styles
