import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

function RestaurantCard({name,cuisine,rating}){
  return (
    <View style={styles.card}>
      <Text>{name}</Text>
      <Text>{cuisine}</Text>
      <Text>{rating}</Text>
    </View>
  );
}

function App() {
  return (
    <View>
      <RestaurantCard 
        name='China Town'
        cuisine='Chinese'
        rating='4.5'
      
      />
      <RestaurantCard
        name='Monal'
        cuisine='Pakistani'
        rating='4.9'
      />
      <RestaurantCard
        name='Asian Wok'
        cuisine='Chinese'
        rating='3.9'
      />
    </View>
  );
}
const styles=StyleSheet.create({
  card:{
    padding:20,
    margin:10,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  }
})
export default App;