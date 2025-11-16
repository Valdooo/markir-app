/**
 * MARKIR - Bottom Tab Navigator dengan Custom Tab Bar
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '../theme';
import { CustomTabBar } from '../components/CustomTabBar';

// Import screens
import { UserHomeScreen } from '../screens/user/UserHomeScreen';
import { RiwayatTransaksiScreen } from '../screens/user/RiwayatTransaksiScreen';
import { ProfileScreen } from '../screens/user/ProfileScreen';
import { TopUpScreen } from '../screens/user/TopUpScreen';
import { AccountScreen } from '../screens/user/AccountScreen';
import { WalletScreen } from '../screens/user/WalletScreen';
import { AboutScreen } from '../screens/AboutScreen';

// Placeholder screen for NFC/Pay
const PayScreen = () => (
  <View style={styles.placeholderContainer}>
    <Text style={styles.placeholderEmoji}>📱</Text>
    <Text style={styles.placeholderTitle}>Scan NFC</Text>
    <Text style={styles.placeholderText}>Tempelkan ponsel ke tag NFC untuk pembayaran</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export const UserTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={UserHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>🏠</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({ focused }) => (
            <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>👤</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Dompet',
          tabBarIcon: ({ focused }) => (
            <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>�</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Pay"
        component={WalletScreen}
        options={{
          tabBarLabel: 'Bayar',
          tabBarIcon: ({ focused }) => (
            <View style={[styles.centerTabIcon, focused && styles.centerTabIconActive]}>
              <Text style={styles.centerTabEmoji}>💳</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'Tentang',
          tabBarIcon: ({ focused }) => (
            <Text style={[styles.tabIcon, focused && styles.tabIconActive]}>ℹ️</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 24,
    opacity: 0.6,
  },
  tabIconActive: {
    opacity: 1,
  },
  centerTabIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  centerTabIconActive: {
    backgroundColor: colors.primary,
  },
  centerTabEmoji: {
    fontSize: 28,
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 32,
  },
  placeholderEmoji: {
    fontSize: 80,
    marginBottom: 24,
  },
  placeholderTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: 12,
  },
  placeholderText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
