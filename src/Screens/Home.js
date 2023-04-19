import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home() {
  return (
    <View >

        <View style={{backgroundColor:'white'}}> 
            <Text style={{textAlign:'center',fontSize:20,color:'black'}}>Flick Fusion 1</Text>
        </View>

        <View style={{height:'100%'}}>
        <View style={{height:'45%',backgroundColor:'grey',justifyContent:'center',alignItems:'center'}} >
            <Icon name='radio-button-on-sharp' size={65} color={'red'} />
            <Text style={{color:'black'}}>Record and Upload Your new Video</Text>
        </View>

        
          {/* <View style={{width:50,backgroundColor:'white',height:50,borderRadius:50/2,marginLeft:169,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30}}>OR</Text>
          </View> */}
        

        <View style={{height:'50%',backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
            <Icon name='add-circle-sharp' size={65} color={'white'} />
            <Text style={{color:'white'}}>Browse and Upload Your existing Video</Text>
        </View>
        </View>

        <View style={{position:'absolute',width:50,backgroundColor:'#464444',height:50,borderRadius:50/2,marginLeft:169,justifyContent:'center',alignItems:'center',marginTop:300}}>
            <Text style={{fontSize:15,color:'white'}}>OR</Text>
          </View>
      </View>
  )
}