import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Switch } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Colors } from '../constants/Color';

function Header({showProfile, setShowProfile, isMenuEnabled, toggleSwitch}: {showProfile: boolean, setShowProfile: React.Dispatch<React.SetStateAction<boolean>>, isMenuEnabled: boolean, toggleSwitch: () => void}) {
    return (
        <View style={[styles.header]}>
            {/* Left side of header*/}
            <View style={styles.leftHeader}>
            <Pressable onPress={() => {setShowProfile(!showProfile); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}} style={({pressed}) => [
                styles.profilePressable,
                {
                opacity: pressed ? 0.5 : 1.0
                }
            ]}>

            <Image
            source={require('../assets/images/Profile-photo-light.png')}
            alt="Profile-Picture"
            style={[styles.imgStyle]}
            />
            </Pressable>   
            </View>
            {/* Middle/Center side of header*/}
            <View style={styles.middleHeader}>
            <Text style={styles.headerText}>Week Of:</Text>
                <Text style={styles.headerText}>Aug 12 - Aug 18, 2024</Text>
                </View>
            {/* Right side of header*/}

            <View style={styles.rightHeader}>
                <View style={styles.switchWrapper}>
            <Switch
                trackColor={{ false: "#767577", true: "#10b981" }}
                thumbColor={isMenuEnabled ? "#f4F3f4" : "#fff"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isMenuEnabled}
                style={styles.SwitchComponent}
            >
            </Switch>
            <Text style={styles.switchLabel}>Track Miles</Text>
            </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: 120,
        backgroundColor: '#1a1f26',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        gap: 10,
    },
    leftHeader: {
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    middleHeader: {
        flex: 2,
        alignItems: 'center',
    },
    rightHeader: {
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 15,
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.dark.text,
        fontSize: 14,
    },
    profilePressable: {
        left: 30,
    },
    imgStyle: {
        width: 45,
        height: 45,
    },
    switchWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        marginRight: 10,
    },
    SwitchComponent: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    },
    switchLabel: {
        fontSize: 10,
        marginTop: 4,
        color: Colors.dark.text,
    },

})

export default Header;