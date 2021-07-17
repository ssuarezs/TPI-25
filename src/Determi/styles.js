import { Dimensions } from 'react-native'
const primary = '#81b214'
const secondary = '#206a5d'
const tertiary = '#ffcc29'
const four = '#f8ede3'

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
    color: tertiary,
    },
    buttonB: {
    marginBottom: 5,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondary,
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
    borderColor: '#206a5d',
    },
    textI: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
    },
    FlatList: {
    alignSelf: 'stretch',
    paddingHorizontal: 5,
    },
    scroll: {
    alignSelf: 'stretch',
    padding: 8,
    borderColor: '#ffcc29',
    borderTopWidth: 4,
    },
    parraf: {
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 12,
    textAlign: 'justify',
    color: '#206a5d',
    },
    title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
    paddingBottom: 10,
    },
    subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
    marginLeft: 20,
    marginRight: 20,
    },
    textA: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffcc29',
    },
    textB: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#206a5d',
    },
    textC: {
    left: 30,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#206a5d',
    },
    space: {
    height: 15,
    },
    button: {
    backgroundColor: '#81b214',
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
    backgroundColor: '#206a5d',
    },
    list: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8ede3',
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
    borderColor: '#206a5d',
    borderWidth: 4,
    borderRadius: 20,
    },
    seccionFrame: {
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 5,
    width: Dimensions.get('window').width-80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: secondary,
    borderRadius: 20,
    alignSelf: 'center',
    },
    mapImage: {
        flex:1,
        width:Dimensions.get('window').width,
    }
};

export default styles
