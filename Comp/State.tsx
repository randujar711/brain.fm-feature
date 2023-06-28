import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 
'react-native';

type MentalStateProps = {
  MentalState: {
    state: string;
    image: number;
  }[];
}

export const State = (props: MentalStateProps) => {
    const getCardStyle = (state: string) =>
      state === 'meditate.' ? StyleSheet.flatten([styles.card, styles.mediCard]) : styles.card;

  return (
    <ScrollView 
      contentContainerStyle={styles.container} 
      horizontal={false}
      showsVerticalScrollIndicator={false}
    >
      {
        props.MentalState.map((e, i) => {
          // console.log(e)
          const marginLeftStyle = i === 3 ? null : { marginLeft: 50 };
            return(
                <View style={ getCardStyle(e.state)}> 
                    <Text style={styles.text}>{e.state}</Text>
                    <Image 
                      style={[{width: '40%', height: '95%', borderRadius: 16}, marginLeftStyle]}
                      source={e.image}
                    />
                </View>
            )
        })
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-5%'
    },
    text: {
        color: '#fff',
        fontSize: 40,
    },
    mediCard:{
      width: '80%'
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: '5%',
        width: '80%', 
        height: '18%',
        backgroundColor: '#30305B',
        borderWidth: 4, 
        borderRadius: 16
    }
});

export default State;
