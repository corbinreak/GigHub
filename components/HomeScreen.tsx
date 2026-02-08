import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../constants/Color';

function HomeScreen() {
    return (
        <ScrollView style={styles.scrollContainer}>
            {/* 1. The Summary Section */}
            <View style={styles.summarySection}>
                <Text style={styles.earningsLabel}>
                    Weekly Earnings of {' '}
                    <Text style={styles.moneyAmount}>$1,300.55</Text>
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

                <View style={styles.appRow}>
                    <Text style={styles.appUsed}>DoorDash</Text>
                    <Text style={styles.appAmount}>$0.00</Text>
                </View>

                <View style={styles.appRow}>
                    <Text style={styles.appUsed}>Amazon Flex</Text>
                    <Text style={styles.appAmount}>$255.00</Text>
                </View>
            </View>


            {/* Driver Information Section */}
            <View style={styles.driverInfoContainer}>
                <View style={styles.infoCard}>
                    <Text style={styles.cardLabel}>Gross Income</Text>
                    <Text 
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={styles.cardValue}>$1,300.55</Text>
                </View>

                <View style={styles.infoCard}>
                    <Text 
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={styles.cardLabel}>Deductions</Text>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={[styles.cardValue, {color: Colors.dark.loss}]}
                    >$700</Text>

                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.cardLabel}>Expenses</Text>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={[styles.cardValue, {color: Colors.dark.loss}]}
                    >$150</Text>

                </View>

                <View style={styles.infoCard}>
                    <Text style={styles.cardLabel}>Miles Driven</Text>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={[styles.cardValue, {color: Colors.dark.miles}]}
                    >350 mi</Text>

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
    },
    driverInfoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 20,
        gap: 15,
        width: '100%',
    },
    infoCard: {
        width: '47%',
        padding: 20,
        aspectRatio: 1,
        backgroundColor: Colors.dark.card,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardLabel: {
        fontSize: 18,
        color: Colors.dark.text,
        marginBottom: 10,
        textAlign: 'center',
    },
    cardValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.dark.profit,
        textAlign: 'center',
    },
});

export default HomeScreen;