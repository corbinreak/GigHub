import { Text, View, StyleSheet, Image, StatusBar, Pressable, Switch, SwitchComponent, Button, TextInput } from "react-native";
import {Link} from "expo-router";
import { Colors } from '../constants/Color';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, {useState} from "react";
import SlideContainer from "../components/SlideContainer";
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics'
import LoginForm from "../components/LoginForm";


export default function Index() {
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState<'Home' | 'Trips' | 'Expenses' | 'Tax'>('Home');
  const [isMenuEnabled, setIsMenuEnabled] = React.useState(false);
  const [startTracking, setStartTracking] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const toggleSwitch = () => {
    setIsMenuEnabled(previousState => !previousState);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };


  

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle="dark-content" backgroundColor="#1a1f26" />
      {/* Login Section */} 
      {!hasLoggedIn ? (
        
        <LoginForm
           setHasLoggedIn={setHasLoggedIn} 
        />
      ) : (
      <>
    
    {/* Content Area */}
        <View style={styles.infoCard}>
        
          {selectedScreen === 'Home' && <Text>Home Screen</Text>}
          {selectedScreen === 'Trips' && <Text>Trips Screen</Text>}
          {selectedScreen === 'Expenses' && <Text>Expenses Screen</Text>}
          {selectedScreen === 'Tax' && <Text>Tax Screen</Text>}

        </View>
    
      {/* Footer with Icons */}
      <View style={styles.footerIconContainer}>
        {/* Home Icon */}
        <Pressable onPress={() => {setSelectedScreen('Home'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}} style={({pressed}) => [
          { opacity: pressed ? 0.5 : 1, alignItems: 'center', justifyContent: 'center'}
        ]}>
          <Ionicons name={selectedScreen === 'Home' ? 'home' : 'home-outline'} size={28} color={selectedScreen === 'Home' ? Colors.light.button : Colors.dark.button}  />
          <Text style={{color: selectedScreen === 'Home' ? Colors.light.button : Colors.dark.button}}>Home</Text>
        </Pressable>

        {/* Trips Icon */}
        <Pressable onPress={() => {setSelectedScreen('Trips'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}} style={({pressed}) => [
          { opacity: pressed ? 0.5 : 1, alignItems: 'center', justifyContent: 'center'}
        ]}>
          <Ionicons name={selectedScreen === 'Trips' ? 'car' : 'car-outline'} size={28} color={selectedScreen === 'Trips' ? Colors.light.button : Colors.dark.button}  />
          <Text style={{color: selectedScreen === 'Trips' ? Colors.light.button : Colors.dark.button}}>Trips</Text>
        </Pressable>

        {/* Expenses Icon */}
        <Pressable onPress={() => {setSelectedScreen('Expenses'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}} style={({pressed}) => [
          { opacity: pressed ? 0.5 : 1, alignItems: 'center', justifyContent: 'center'}
        ]}>
          <Ionicons name={selectedScreen === 'Expenses' ? 'card' : 'card-outline'} size={28} color={selectedScreen === 'Expenses' ? Colors.light.button : Colors.dark.button}  />
          <Text style={{color: selectedScreen === 'Expenses' ? Colors.light.button : Colors.dark.button}}>Expenses</Text>
        </Pressable>

        {/* Tax Icon */}
        <Pressable onPress={() => {setSelectedScreen('Tax'); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}} style={({pressed}) => [
          { opacity: pressed ? 0.5 : 1, alignItems: 'center', justifyContent: 'center'}
        ]}>
          <Ionicons name={selectedScreen === 'Tax' ? 'document-text' : 'document-text-outline'} size={28} color={selectedScreen === 'Tax' ? Colors.light.button : Colors.dark.button}  />
          <Text style={{color: selectedScreen === 'Tax' ? Colors.light.button : Colors.dark.button}}>Tax</Text>
        </Pressable>
      </View>
      </>)}


      {/* Slide-out Profile Menu */}
    
    {showProfile && (
      <SlideContainer isVisible={showProfile}>
       <View style={styles.drawerHeader}>
          <Text style={styles.title}>Settings</Text>
          <Ionicons name="settings-sharp" size={20} color={Colors.light.text} />
        </View>
        <View style={styles.divider}></View>

        <Pressable style={styles.settingsRow} onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}}>
          <View style={styles.settingsRow}>
            <Ionicons name="chevron-forward" size={18} color="#555" />
            <Text style={[ styles.title, {color: Colors.light.text}]}>Profile</Text>
          </View>
        </Pressable>


        <Pressable onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}}>
          <View style={styles.settingsLeft}>
            <Ionicons name ="chevron-forward" size={18} color="#555" />
            <Text style={[ styles.title, {color: Colors.light.text}]}>Notifications</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft); setHasLoggedIn(false)}}>
          <View style={styles.settingsLeft}>
            <Ionicons name ="log-out-outline" size={18} color="#555" />
            <Text style={[ styles.title, {color: Colors.light.text}]}>Log Out</Text>
          </View>

        </Pressable>
        

        <Pressable 
        style={styles.closeButton}
        onPress={() => {setShowProfile(false); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft)}}
        >
         <Text style={styles.closeTitle}>Close</Text> 
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
    gap: 10,
    
  },
  leftHeader: { 
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 15,

  },
  middleHeader:{
    flex: 2,
    alignItems:'center',
  },
  rightHeader:{
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
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  divider: {
    height: 1,
    backgroundColor: '#273140',
    marginBottom: 20,

  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    paddingVertical:15,
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9',
    marginBottom: 10,
  },
  settingsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  closeButton: {
    marginTop: 'auto',
    backgroundColor: '#1a1f26',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',

  },
  closeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
  imgStyle: {
    width: 45,
    height: 45,
  },
  content: {
    flex: 1,
  },
  infoCard: {
    flex: 1,
    top: -20,
    backgroundColor: Colors.light.card,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 20,
    //Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    //Shadow for Android
    elevation: 10,
  },
  footerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
   
  }
})
