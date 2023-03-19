import React, {useState} from 'react';
import { ImageBackground } from 'react-native';
import { ViewComponent } from 'react-native';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Component from './component'

const App = () => {

    const [count, setCount] = useState(0);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop:50,
          marginLeft:30,
        },

        cardContainer:{
            height:150,
            width:100,
            display:'flex',
            flexDirection:"row",
            justifyContent: 'flex-start',
            alignItems:'flex-start'
        },

        image: {
            height:50,
            width:100,
            borderTopLeftRadius:10,
            borderTopRightRadius:10
        },

        card:{
            backgroundColor:  'skyblue',
            borderRadius: 10,
            margin:10
        }
    })

  return (

<View style={{
  flex:1,
  display:'flex',
  backgroundColor:'yellow'
}}>
    <View style={styles.container}>
        <Text
        style={{color:'red', fontSize:20}}
        >Simple Counter App</Text>
        <Text style={{marginLeft:60}}>{count}</Text>
        <View style = {{display:'flex', flexDirection: "row", margin:20}}>
             <Button
               style = {{margin:'50px'}}
               onPress = {() => {
                 setCount(prevCount => prevCount + 1)
               }}
               title="Add"
             />
             <Button
               onPress = {() => {
                 setCount(prevCount => prevCount - 1)
               }}
               title="Sub"
             />
        </View>
        <View/>   

        <View style={styles.cardContainer}>
            <View style={styles.card}>
                 <Image
                 style= {styles.image}
                 src={'http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg'}
                 />
                 <Text>Nature</Text>
                 <Text>Peaceful place</Text>
            </View>

            <View style={styles.card}>
                 <Image
                 style= {styles.image}
                 src={'https://tse4.mm.bing.net/th?id=OIP.faTcei8217MQT8FXn_SXIQHaEK&pid=Api&P=0'}
                 />
                 <Text>Gym</Text>
                 <Text>Fun Place</Text>
            </View>
            
          </View> 
          <View style={styles.cardContainer}>
            <View style={styles.card}>
                 <Image
                 style= {styles.image}
                 src={'http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg'}
                 />
                 <Text>Nature</Text>
                 <Text>Peaceful place</Text>
            </View>

            <View style={styles.card}>
                 <Image
                 style= {styles.image}
                 src={'https://tse4.mm.bing.net/th?id=OIP.faTcei8217MQT8FXn_SXIQHaEK&pid=Api&P=0'}
                 />
                 <Text>Gym</Text>
                 <Text>Fun Place</Text>
            </View>
            
          </View> 
        </View>
        

       <Component 
        name= 'Gaven'
        text = 'React-Native'
       />
       
</View>

  );
};

export default App;