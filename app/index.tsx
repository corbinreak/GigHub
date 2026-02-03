import { Text, View, StyleSheet, Image, StatusBar, Pressable, Switch, SwitchComponent, Button } from "react-native";
import {Link} from "expo-router";
import { Colors } from '../constants/Color';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, {useState} from "react";
import SlideContainer from "../components/SlideContainer";


export default function Index() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor="#1a1f26" />
    <View style={[styles.header]}>
      
      {/* Left side of header*/}
     <View style={styles.leftHeader}>
     <Pressable onPress={() => {setShowProfile(!showProfile)}} style={({pressed}) => [
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
       <Text style={styles.headerText}>Week Of: Jan 25th</Text>
        </View>


       {/* Right side of header*/}
       <View style={styles.rightHeader}>
        <View style={styles.switchWrapper}>
       <Switch
         trackColor={{ false: "#767577", true: "#10b981" }}
         thumbColor={isEnabled ? "#f4F3f4" : "#fff"}
         ios_backgroundColor="#3e3e3e"
         onValueChange={toggleSwitch}
         value={isEnabled}
         style={styles.SwitchComponent}
       >
        
       </Switch>
       <Text style={styles.switchLabel}>Manually Start Tracking</Text>
       </View>
    </View>
   </View>
    {/* Content Area */}

    <View style={[styles.container]}>
      
    </View>
    {showProfile && (
      <SlideContainer isVisible={showProfile}>
        <Pressable onPress={() => setShowProfile(false)}>
        <Text style={styles.button}>Close</Text>
        </Pressable>
      </SlideContainer>)}
    </SafeAreaView>
  </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 120,
    backgroundColor: '#1a1f26',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    
  },
  leftHeader: { 
    flex: 1,
    alignItems: 'flex-start',

  },
  middleHeader:{
    flex: 2,
    alignItems:'center',
  },
  rightHeader:{
    flex: 1,
    alignItems: 'flex-end',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.dark.text,
    fontSize: 15,
  },
  profilePressable: {
    left: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  switchWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    marginLeft: 10,
  },
  SwitchComponent: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    
    
  },
  switchLabel: {
    color: Colors.dark.text,
    fontSize: 10,
    marginTop: 4,
    
  },
  imgStyle: {
    width: 45,
    height: 45,
  },
  content: {
    flex: 1,
  },
  button: {
    fontSize: 20,
    color: Colors.light.button,
   
  }
})
