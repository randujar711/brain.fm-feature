import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function TabMenu() {
  return (
    <View style={styles.container}>
        <View style={styles.view}>
            <Text style={styles.text}>Home</Text>
            <Ionicons name="ios-home" size={24} color="white" />
        </View>
        <View style={styles.view}>
            <Text style={styles.text}>Library</Text>
            <Entypo name="open-book" size={24} color="white" />
        </View>
        <View style={styles.view}>
            <Text style={styles.text}>Explore</Text>
            <MaterialIcons name="new-releases" size={24} color="white" />
        </View>
        <View style={styles.view}>
            <Text style={styles.text}>Profile</Text>
            <Ionicons name="person" size={24} color="white" />        
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#30305B'
    }, 
    text: {
        color: '#fff'
    }
}) 