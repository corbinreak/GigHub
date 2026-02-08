import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Color';

function TripsScreen() {
    return (
        <ScrollView style={styles.Scrollcontainer}>
            {/* 1. The Map Section */}
            <View style={styles.mapContainer}>
                <Text style={styles.mapPlaceholder}>Map Placeholder</Text>

            </View>

            {/* 2. Previous Trips Section */}
            <View>
                <Text style={styles.sectionTitle}>Previous Trips</Text>
                {/* Here you would map through your trips data and display each trip */}
                <View style={styles.tripCard}>
                    <Text style={styles.tripTitle}>Trip to Downtown</Text>
                    <Text style={styles.tripDetails}>Date: 09/15/2024 | Earnings: $25.00 | Miles: 5 mi</Text>
                </View>

                <View style={styles.tripCard}>
                    <Text style={styles.tripTitle}>Trip to Airport</Text>
                    <Text style={styles.tripDetails}>Date: 09/14/2024 | Earnings: $40.00 | Miles: 12 mi</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Scrollcontainer: {
        flex: 1,
        padding: 13,
        
    },
    mapContainer: {
        width: '100%',
        aspectRatio: .8,
        backgroundColor: '#1a1f26',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
         shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 24,
        marginTop: 10,
    },
    mapPlaceholder: {
        fontSize: 18,
        color: 'gray',
       
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.secondaryText,
    },
    tripCard: {
        backgroundColor: Colors.light.card,
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
         shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tripTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.light.text,
         marginBottom: 5,
    },
    tripDetails: {
        fontSize: 14,
        color: Colors.light.secondaryText,
    },
})


export default TripsScreen;