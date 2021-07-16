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
    paddingTop: 20,
    paddingBottom: 120,
    backgroundColor: four,
  },
  div: {
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
    backgroundColor: primary,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    alignSelf: 'stretch',
    borderRadius: 20,
    padding: 20,
  },
  button : {
    flex: 1,
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginBottom: 0,
    alignSelf: 'stretch',
    borderRadius: 20,
    padding: 10,
  },
  title : {
    color: secondary,
    fontWeight: 'bold',
    fontSize: 18,
    top: 10
  },
  subtitle : {
    color: secondary,
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 5,
    paddingLeft: 10,
    top: 10,
  },
  buttonText : {
    color: secondary,
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 5,
  },
  img : {
    flex: 1,
    height: 140,
    width: 140,
  },
};

export default styles
