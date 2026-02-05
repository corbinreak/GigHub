import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../constants/Color';
import * as Haptics from 'expo-haptics';




function LoginForm({setHasLoggedIn}: {setHasLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}) {
 
    return (
       <View style={styles.logInContainer}>
                 <Text style={{fontSize: 24, marginBottom: 20, color: Colors.light.text}}>Welcome to GigHub</Text>
                 <Text style={{fontSize: 16, marginBottom: 40, color: Colors.light.secondaryText}}>Please log in to continue</Text>
       
                 <TextInput
                   placeholder="Email"
                   placeholderTextColor={Colors.light.secondaryText}
                   style={styles.inputText}
                 ></TextInput>
       
                 <TextInput
                   placeholder="Password"
                   placeholderTextColor={Colors.light.secondaryText}
                   secureTextEntry={true}
                   style={styles.inputText}
                 ></TextInput>
       
                 <Pressable 
                   style={({pressed}) => [
                     {
                       backgroundColor: pressed ? '#0d1117' : '#273140',
                     },
                     styles.button,
                     {
                       padding: 15,
                       borderRadius: 10,
                       width: '80%',
                       alignItems: 'center',
                     }
                   ]}
                   onPress={() => {setHasLoggedIn(true); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}}
                 >
                   <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Log In</Text>
                 </Pressable>
               </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    inputText: {
        width: '80%',
        height: 50,
        borderColor: Colors.light.border,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        color: Colors.light.text,
    },
    button: {

    },
    logInContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },
})


export default LoginForm;