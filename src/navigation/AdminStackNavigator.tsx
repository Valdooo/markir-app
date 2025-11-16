/**
 * MARKIR E-Parking - Admin Stack Navigator
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdminStackParamList } from '../data/types';
import { AdminHomeScreen } from '../screens/admin/AdminHomeScreen';
import { PenagihanScreen } from '../screens/admin/PenagihanScreen';
import { RegistrasiMotorScreen } from '../screens/admin/RegistrasiMotorScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { colors } from '../theme';

const Stack = createNativeStackNavigator<AdminStackParamList>();

export const AdminStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}>
      <Stack.Screen name='AdminHome' component={AdminHomeScreen} options={{ title: 'Dashboard Admin' }} />
      <Stack.Screen name='Penagihan' component={PenagihanScreen} options={{ title: 'Penagihan NFC' }} />
      <Stack.Screen name='RegistrasiMotor' component={RegistrasiMotorScreen} options={{ title: 'Registrasi Motor' }} />
      <Stack.Screen name='About' component={AboutScreen} options={{ title: 'Tentang' }} />
    </Stack.Navigator>
  );
};
