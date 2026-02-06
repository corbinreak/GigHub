import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform, Touchable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../constants/Color';
import * as Haptics from 'expo-haptics';


function SignUp({onGoBack, setHasLoggedIn}: {onGoBack: () => void, setHasLoggedIn: React.Dispatch<React.SetStateAction<boolean>>} ) {

    return (
        <KeyboardAvoidingView style={styles.SignUpWrapper} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
            <View style={styles.SignUpWrapper}>
                <View style={styles.SignUpContainer}>
                    <Text style={{fontSize: 24, marginBottom: 20, color: Colors.light.text}}>Create Your Account</Text>
                    <Text style={{fontSize: 16, marginBottom: 40, color: Colors.light.secondaryText}}>Sign Up To Start Tracking Miles!</Text>
                    <TextInput
                    placeholder="Name"
                    placeholderTextColor={Colors.light.secondaryText}
                    style={styles.inputText} 
                    ></TextInput>
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
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor={Colors.light.secondaryText}
                        secureTextEntry={true}
                        style={styles.inputText}
                    ></TextInput>
                </View>
                
                <View style={styles.footer}>
                    <Pressable style={({pressed}) => [
                        {backgroundColor: pressed ? '#0d1117' : '#273140',
                        },
                        {padding: 15, borderRadius: 10, width: '80%', alignItems: 'center', marginBottom: 20}
                    ]}
                    onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); setHasLoggedIn(true); onGoBack()}} 
                    >
                        <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Sign Up</Text>
                    </Pressable>

                    <View style={{flexDirection: 'column', gap: 15, alignItems: 'center'}}>
                        <Text style={{color: Colors.light.secondaryText}}>Already have an account?</Text>
                        <Pressable onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); onGoBack()}}>
                            <Text style={{color: '#10b981', fontWeight: 'bold'}}>Log In</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({
    SignUpWrapper: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    SignUpContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputText: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.light.border,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        color: Colors.light.text,
    },
    footer: {
        paddingBottom: 45,
        alignItems: 'center',
    },
});

export default SignUp;