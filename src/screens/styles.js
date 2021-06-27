import { Dimensions } from 'react-native'
const primary = '#81b214'
const secondary = '#206a5d'
const tertiary = '#ffcc29'
const four = '#f8ede3'

const styles = {
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: four,
  },
  item : {
    flex: 1,
    backgroundColor: primary,
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
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 10,
    paddingHorizontal: 10,
  },
  title : {
    textAlign: 'center',
    color: secondary,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle : {
    color: secondary,
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