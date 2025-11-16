/**
 * MARKIR - Admin Home Screen
 * @author Valdo Muhammad
 */

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { colors, spacing, fontSize, shadow } from '../../theme';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { logout } from '../../redux/slices/authSlice';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AdminStackParamList } from '../../data/types';

type AdminHomeScreenProps = {
  navigation: NativeStackNavigationProp<AdminStackParamList, 'AdminHome'>;
};

export const AdminHomeScreen = ({ navigation }: AdminHomeScreenProps) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { transactions } = useAppSelector((state) => state.transaction);

  const todayTransactions = transactions.filter(
    (t) =>
      new Date(t.createdAt).toDateString() === new Date().toDateString()
  );
  const totalToday = todayTransactions.reduce((sum, t) => sum + t.amount, 0);
  const lunas = todayTransactions.filter((t) => t.status === 'completed').length;
  const tunggakan = todayTransactions.filter(
    (t) => t.status === 'pending'
  ).length;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Selamat Datang, Admin</Text>
            <Text style={styles.userName}>{user?.name}</Text>
          </View>
          <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Text style={styles.statValue}>Rp {totalToday.toLocaleString('id-ID')}</Text>
            <Text style={styles.statLabel}>Total Hari Ini</Text>
          </Card>

          <View style={styles.statRow}>
            <Card style={styles.statCard}>
              <Text style={[styles.statValue, styles.successText]}>{lunas}</Text>
              <Text style={styles.statLabel}>Lunas</Text>
            </Card>

            <Card style={styles.statCard}>
              <Text style={[styles.statValue, styles.dangerText]}>{tunggakan}</Text>
              <Text style={styles.statLabel}>Tunggakan</Text>
            </Card>
          </View>

          <Card style={styles.statCard}>
            <Text style={styles.statValue}>{todayTransactions.length}</Text>
            <Text style={styles.statLabel}>Total Transaksi</Text>
          </Card>
        </View>

        {/* Quick Actions */}
        <Card style={styles.actionsCard}>
          <Text style={styles.sectionTitle}>Menu Utama</Text>

          <Button
            title=' Penagihan (NFC Read)'
            onPress={() => navigation.navigate('Penagihan')}
            variant='primary'
            fullWidth
            
          />

          <Button
            title=' Registrasi Motor (NFC Write)'
            onPress={() => navigation.navigate('RegistrasiMotor')}
            variant='secondary'
            fullWidth
            
          />

          <Button
            title='ℹ Tentang Aplikasi'
            onPress={() => navigation.navigate('About')}
            variant='outline'
            fullWidth
          />
        </Card>

        {/* Recent Transactions */}
        <Card style={styles.recentCard}>
          <Text style={styles.sectionTitle}>Transaksi Terbaru</Text>

          {todayTransactions.slice(0, 5).map((transaction, index) => (
            <View key={index} style={styles.transactionItem}>
              <View style={styles.transactionLeft}>
                <Text style={styles.transactionTag}>{transaction.locationId}</Text>
                <Text style={styles.transactionTime}>
                  {new Date(transaction.createdAt).toLocaleTimeString('id-ID')}
                </Text>
              </View>
              <View style={styles.transactionRight}>
                <Text
                  style={[
                    styles.transactionAmount,
                    transaction.amount === 0 && styles.greenText,
                  ]}>
                  {transaction.amount === 0
                    ? 'GRATIS' : `Rp ${transaction.amount.toLocaleString('id-ID')}`}
                </Text>
                <View
                  style={[
                    styles.statusBadge,
                    transaction.status === 'completed' && styles.successBadge,
                    transaction.status === 'pending' && styles.dangerBadge,
                    transaction.status === 'cancelled' && styles.infoBadge,
                  ]}>
                  <Text style={styles.statusText}>
                    {transaction.status === 'completed' ? 'LUNAS' : 
                     transaction.status === 'pending' ? 'PENDING' : 
                     transaction.status === 'failed' ? 'GAGAL' : 'BATAL'}
                  </Text>
                </View>
              </View>
            </View>
          ))}

          {todayTransactions.length === 0 && (
            <Text style={styles.emptyText}>Belum ada transaksi hari ini</Text>
          )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    backgroundColor: colors.primary,
  },
  greeting: {
    fontSize: fontSize.sm,
    color: colors.primaryLight,
  },
  userName: {
    fontSize: fontSize.xl,
    fontWeight: '700',
    color: colors.white,
    marginTop: spacing.xs,
  },
  logoutBtn: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  borderRadius: 8,
    backgroundColor: colors.white,
  },
  logoutText: {
    color: colors.primary,
    fontWeight: '600',
  },
  statsContainer: {
    padding: spacing.lg,
  },
  statCard: {
    padding: spacing.lg,
    marginBottom: spacing.md,
    alignItems: 'center',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallCard: {
    flex: 1,
    marginHorizontal: spacing.xs,
  },
  statValue: {
    fontSize: fontSize.xxl,
    fontWeight: '700',
    color: colors.primary,
  },
  statLabel: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  successText: {
    color: colors.success,
  },
  dangerText: {
    color: colors.danger,
  },
  greenText: {
    color: colors.success,
  },
  actionsCard: {
    margin: spacing.lg,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  actionBtn: {
    marginBottom: spacing.sm,
  },
  recentCard: {
    margin: spacing.lg,
    marginTop: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  transactionLeft: {
    flex: 1,
  },
  transactionTag: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.text,
  },
  transactionTime: {
    fontSize: fontSize.xs,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.text,
  },
  statusBadge: {
    marginTop: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
  borderRadius: 8,
  },
  successBadge: {
    backgroundColor: colors.successLight,
  },
  dangerBadge: {
    backgroundColor: colors.dangerLight,
  },
  infoBadge: {
    backgroundColor: colors.secondaryLight,
  },
  statusText: {
    fontSize: fontSize.xs,
    fontWeight: '600',
    color: colors.white,
  },
  emptyText: {
    textAlign: 'center',
    color: colors.textSecondary,
    fontSize: fontSize.sm,
    padding: spacing.lg,
  },
});
