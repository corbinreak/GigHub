import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Color';

function ExpenseScreen() {
    return (
        <ScrollView style={styles.scrollContainer}>
            {/* This View acts as the "Row" holding both sides */}
            <View style={styles.rowContainer}>
                
                {/* 1. Left Side: Expense Category */}
              <View style={styles.expenseCategory}>
                <View style={styles.cardHeader}>
                    <Ionicons name="water-outline" size={18} color="#f87171" />
                    <Text style={styles.cardLabel}>GAS</Text>
                </View>
                  <Text style={styles.cardValue}>145.25</Text>
              </View>


                {/* 2. Right Side: Bank Transactions */}
                <Pressable style={({pressed}) => [
                    styles.actionCard,
                    {
                        opacity: pressed ? 0.5 : 1.0
                    }
                ]}>
                    <Ionicons name = "briefcase-outline" size={20} color="#60a5fa" />
                    <Text style={styles.actionText}>Link Bank</Text>
                    <Text style={styles.subText}>Sync and view transactions.</Text>
                </Pressable>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'row',           
        justifyContent: 'space-between',      
        padding: 20,
        width: '100%',
    },
    expenseCategory: {
        flex: 1,                      
        backgroundColor: '#1a1f26',
        padding: 15,
        borderRadius: 20,
        marginRight: 10,
        justifyContent: 'center',

    },
    cardHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        marginBottom: 8,
    },
    cardValue: {
        color: Colors.dark.loss,
        fontSize: 22,
        fontWeight: '800'
    },
    cardLabel: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800'
    },
    actionCard: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e2e8f0',

    },
    actionText: {
        color: '#1e293b',
        fontWeight: '600',
        fontSize: 16,
        marginTop: 8,
    },
    subText: {
        color: '#64748b',
        fontSize: 10,
        textAlign: 'center',
    },
    
});

export default ExpenseScreen;