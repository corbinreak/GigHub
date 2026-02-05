import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function HomeScreen() {
    return (
        <ScrollView style={styles.scrollContainer}>
            {/* 1. The Summary Section */}
            <View style={styles.summarySection}>
                <Text style={styles.earningsLabel}>
                    Weekly Earnings of {' '}
                    <Text style={styles.moneyAmount}>$1,045.55</Text>
                </Text>
            </View>

            {/* 2. The Breakdown Section */}
            <View style={styles.breakdownSection}>
                <View style={styles.appRow}>
                    <Text style={styles.appUsed}>Uber</Text>
                    <Text style={styles.appAmount}>$645.55</Text>
                </View>

                <View style={styles.appRow}>
                    <Text style={styles.appUsed}>Lyft</Text>
                    <Text style={styles.appAmount}>$400.00</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    summarySection: {
        padding: 20,
        alignItems: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    breakdownSection: {
        padding: 20,
        gap: 15, 
    },
    appRow: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingVertical: 10,
    },
    earningsLabel: {
        fontSize: 18,
        color: '#555',
    },
    moneyAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#10b981',
    },
    appUsed: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    appAmount: {
        fontSize: 16,
        color: '#555',
        fontWeight: '600',
    }
});

export default HomeScreen;