import { View, Text, TextInput, TouchableOpacity, Button, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Routes from './constants/Routes';



export default function (props) {
    
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: '#ffffff', fontSize: 50, textAlign: 'center' }}>VidCom▶️</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#ffffff', fontSize: 18, textAlign: 'center' }}>Welcome back to VidCom</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
                        <TextInput placeholder='username' placeholderTextColor={'#808080'} style={{ borderWidth: 2, width: '80%', margin: 10, backgroundColor: 'white' }} />
                        <TextInput placeholder='Password' placeholderTextColor={'#808080'} style={{ borderWidth: 2, width: '80%', margin: 10, backgroundColor: 'white' }}
                            value={password}
                            secureTextEntry={!showPassword}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity
                            // style={{ position: 'absolute', right: 10, top: 10 }}
                            onPress={togglePasswordVisibility}>
                            <Icon
                                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                size={20}
                                color="blue"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>props.navigation.navigate(Routes.HOME)} style={{ width: '80%', borderWidth: 2, padding: 14, margin: 10, backgroundColor: '#333333' }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 15 }}>LOGIN</Text>
                        </TouchableOpacity>


                    </View>





                </View >
                <View>
                    <Text style={{ color: '#ffffff', fontSize: 15, textAlign: 'center' }}>Version-4.0.8</Text>
                </View>




            </View>
        </KeyboardAvoidingView>
    )
}