import { Dimensions } from 'react-native'
const primary = '#90cc3e'
const secondary = '#206a5d'
const tertiary = '#ffcc29'

const styles = {
  container : {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    paddingBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 40,
  },
  title : {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: secondary,
  },
  button: {
    flex: 1,
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    margin: 15,
    marginBottom: 0,
    padding: 10,
    borderRadius: 20,
  },
};

export default styles
