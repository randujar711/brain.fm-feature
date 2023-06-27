import { StyleSheet, View } from 'react-native';
import { State } from './Comp/State';
import Header  from './Comp/Header';
import TabMenu from './Comp/TabMenu';
// import TabMenu from './Comp/TabMenu';


const MentalState = [
    {
        state: 'focus.', 
        image: require('./assets/focus-meme.jpg')
    },
    {
        state: 'relax.',
        image: require('./assets/4ai4r8.jpg')

    },
    {
        state: 'sleep.',
        image: require('./assets/isleep.jpg')

    },
    {
        state: 'meditate.',
        image: require('./assets/meditate.jpg')

    }
]

export default function App(){

    return(
        <View style={styles.container} > 
          <Header/>
          <State MentalState={MentalState}/>
          <TabMenu />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgb(19,19,42)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
  test: {
    backgroundColor: '#fff',
    position: 'absolute',
    height: '100%'
  },
  text: {
    color: '#fff'
  }, 
  wrapper: {
    width: '100%'
  },
});
