import { Dimensions } from 'react-native'
const primary = '#81b214'
const secondary = '#206a5d'
const tertiary = '#ffcc29'
const four = '#f8ede3'
const {width, height} = Dimensions.get('screen')


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
    backgroundColor: primary,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 8,
    marginHorizontal: 10,
    alignSelf: 'stretch',
    borderRadius: 25,
    padding: 15,
    paddingHorizontal: 25,
    top: 5,
  },
  deletemark : {
    flex: 0.2,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    marginRight: 10,
    borderRadius: 20,
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
    fontSize: 16,
  },
  subtitle : {
    color: secondary,
    fontWeight: 'bold',
    fontSize: 12,
    left: 10,
  },
  buttonText : {
    color: secondary,
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
