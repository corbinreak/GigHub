import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View, } from 'react-native';
import {Colors} from '../constants/Color';


const { height, width } = Dimensions.get('window');

const DrawerWidth = 250;

interface SlideContainerProps {
    isVisible: boolean;
    children: ReactNode;
}
const SlideContainer = ({ isVisible, children }: SlideContainerProps) => {
    // Start the container off-screen (height-of-device)

    const translateX = useRef(new Animated.Value(-DrawerWidth)).current;

    useEffect(() => {
        Animated.spring(translateX, {
            toValue: isVisible ? 0 : -DrawerWidth,
            useNativeDriver: true,
            friction: 8,
            tension: 80,
        }).start();
    }, [isVisible]);

    return (
        <Animated.View style={[ styles.container, { transform: [{ translateX }]}]}>
            {children}
        </Animated.View>
    );
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        width: DrawerWidth,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: 15,
        paddingTop: 60,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        //Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        //Shadow for Android
        elevation: 20,
        zIndex: 1000,

    }
})

export default SlideContainer;

