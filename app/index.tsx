import { Text, View, StyleSheet, Image } from "react-native";
import {Link} from "expo-router";
import { Colors } from '../constants/Color';
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={[styles.header]}>
     
      <Image
       source={require('../assets/images/Profile-photo.png')} 
       alt="Profile-Picture"
       style={{width:100, height:100, borderRadius:50, marginBottom:20}}
      />
       <Text style={styles.headerText}>Week Of: Jan 25th</Text>
       
      
    </View>


    <View style={[styles.container]}>

    </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#1a1f26',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.dark.text,
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    flex: 1,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
   
  }
})
