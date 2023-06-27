import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Pressable, Alert, FlatList } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Header(){
  const [toggleMenuState, setToggleMenuState] = useState(false)

  const toggleMenu = (id: number) => {
    console.log(id)
    setToggleMenuState(id === 2)
    console.log(toggleMenuState)
  }

  const changeDefault = (option: string, condition: boolean) => {
      setToggleMenuState(condition)
      Alert.alert('Notice', `Default Menu changed to ${option}`, [
        {text: 'Vibe out', onPress: () => console.log('alert closed')}
      ])
    console.log('longpress works')
  }
const jumpInData = [
    { id: '1', text: 'Jump In' },
    { id: '2', text: 'Jump In' },
    { id: '3', text: 'Jump In' },
    { id: '4', text: 'Jump In' },
    { id: '5', text: 'Jump In' },
]
interface Item {
  id: string;
  text: string;
}
  const favData: Item[] = [
    { id: '1', text: 'Favorites' },
    { id: '2', text: 'Favorites' },
    { id: '3', text: 'Favorites' },
    { id: '4', text: 'Favorites' },
    { id: '5', text: 'Favorites' },
  ];

  const renderFavorite = ({ item }: { item: Item }) => (
    <View style={styles.card}>
      <MaterialIcons name="favorite" size={24} color="black" />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.scrollView}>
      <View style={styles.buttonContainer}>

        <Pressable 
          onPress={()=>toggleMenu(1)}
          onLongPress={()=> changeDefault('Most Recent', false )}
          style={styles.button}
        >
          <Text style={styles.text}>Jump Back In</Text>
        </Pressable>

        <Pressable 
          onPress={()=>toggleMenu(2)}
          onLongPress={()=> changeDefault('Favorites', true )}
          style={styles.button}
        >
          <Text style={styles.text}>Favorites</Text>
        </Pressable>

      </View>
      
      {!toggleMenuState && 
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
            {jumpInData.map((item) => (
              <View key={item.id} style={styles.card}>
                <Ionicons name="arrow-redo" size={24} color="black" />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            ))}
        </ScrollView>}
        {toggleMenuState && 
          <FlatList
            contentContainerStyle={styles.contentContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={favData}
            renderItem={renderFavorite}
          />}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: '20%',
    width: '100%',
    margin: 50,
    marginBottom: 5,
    alignSelf: 'center',
    borderColor: 'lightblue',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: '5%'
  },
  button: {
    marginRight: '5%',
    borderRadius: 17,
    padding: 12,
    backgroundColor: '#30305B',
  },
  card: {
    padding: 20,
    margin: 20,
    fontSize: 18,
    borderWidth: 4, 
    borderRadius: 16,    
    borderColor: 'black',
    fontWeight: 'bold',
    backgroundColor: '#30305B',
  },
  text: {
    color: '#fff',
  },
});
