import {View,Text} from 'react-native'

export default function Component(props) {
    return(
        <View style={{display:'flex', alignContent:'center', justifyContent:'center', marginBottom:200}}>
            <Text style={{fontSize:40}}>{props.name} learnt the basics of {props.text}</Text>
        </View>
    )
}