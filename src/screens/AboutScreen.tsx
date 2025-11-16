/**
 * MARKIR - About Screen
 * @author Valdo Muhammad
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { colors, spacing, fontSize } from '../theme';

export const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>🅿️</Text>
          <Text style={styles.appName}>MARKIR E-Parking</Text>
          <Text style={styles.appVersion}>Tap, Park, Done.</Text>
        </View>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>ℹ️ Tentang Aplikasi</Text>
          
          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>1. Visi & Filosofi</Text>
            <Text style={styles.description}>
              MARKIR hadir untuk mentransformasi sistem retribusi parkir tepi jalan (informal) menjadi ekosistem digital yang modern, efisien, dan terpercaya. Kami berpegangan pada filosofi <Text style={styles.bold}>Tap and Done</Text>, memastikan setiap transaksi akuntabel, transparan, dan bebas dari masalah uang kembalian, memberdayakan juru parkir, dan memberikan kepastian hukum bagi pengguna.
            </Text>
          </View>

          <View style={styles.subsection}>
            <Text style={styles.subsectionTitle}>2. Fitur Kunci Aplikasi</Text>
            <Text style={styles.featureItem}>
              <Text style={styles.bold}>• NFC Tap-to-Pay:</Text> Pembayaran retribusi parkir non-tunai melalui tapping Tag NFC kendaraan.
            </Text>
            <Text style={styles.featureItem}>
              <Text style={styles.bold}>• Role-Based System:</Text> Pemisahan fungsionalitas untuk Petugas (Admin) dan Pengguna (User).
            </Text>
            <Text style={styles.featureItem}>
              <Text style={styles.bold}>• Integrated Wallet:</Text> Manajemen saldo dan koneksi ke E-Wallet (simulasi) untuk pembayaran otomatis.
            </Text>
          </View>
        </Card>

        <Card style={styles.card}>
          <Text style={styles.sectionTitle}>👨‍💻 Informasi Pengembang</Text>
          <Text style={styles.subtitle}>(Lead Developer & Full Stack)</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nama</Text>
            <Text style={styles.infoValue}>Valdo Muhammad</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Project Role</Text>
            <Text style={styles.infoValue}>Lead Developer & Full Stack Engineer</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Institusi</Text>
            <Text style={styles.infoValue}>Mahasiswa Sistem Komputer (SK), Universitas Indo Global Mandiri (UIGM) Palembang</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Kontak (Instagram)</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/valdomuhammadd')}>
              <Text style={styles.linkValue}>@valdomuhammadd</Text>
            </TouchableOpacity>
          </View>
        </Card>

                <Card style={styles.card}>
          <Text style={styles.sectionTitle}>⚙️ Detail Teknis & Lisensi</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Versi Aplikasi</Text>
            <Text style={styles.infoValue}>1.0 (Development Build)</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Platform</Text>
            <Text style={styles.infoValue}>React Native (TypeScript)</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Keterangan</Text>
            <Text style={styles.infoValue}>Real NFC API + mock backend simulasi</Text>
          </View>
        </Card>

        <Text style={styles.copyright}>© Copyright 2025</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollView: { flex: 1 },
  header: { alignItems: 'center', padding: spacing.xl, backgroundColor: colors.primary },
  logo: { width: 80, height: 80, borderRadius: 40, backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', marginBottom: spacing.md },
  logoText: { fontSize: 40 },
  appName: { fontSize: fontSize.xxxl, fontWeight: '700', color: colors.white, marginBottom: spacing.xs },
  appVersion: { fontSize: fontSize.sm, color: colors.primaryLight },
  card: { margin: spacing.lg },
  sectionTitle: { fontSize: fontSize.lg, fontWeight: '700', color: colors.text, marginBottom: spacing.md },
  name: { fontSize: fontSize.xl, fontWeight: '700', color: colors.primary, marginBottom: spacing.md },
  roleSection: { marginBottom: spacing.md, paddingLeft: spacing.sm },
  roleLabel: { fontSize: fontSize.sm, fontWeight: '700', color: colors.text, marginBottom: spacing.xs },
  roleValue: { fontSize: fontSize.md, fontWeight: '600', color: colors.primary, marginBottom: spacing.xs },
  institution: { fontSize: fontSize.sm, color: colors.textSecondary, marginBottom: spacing.xs },
  instagramBtn: { marginTop: spacing.md, padding: spacing.md, backgroundColor: colors.primary, borderRadius: 8, alignItems: 'center' },
  instagram: { fontSize: fontSize.md, fontWeight: '600', color: colors.white },
  description: { fontSize: fontSize.sm, color: colors.textSecondary, lineHeight: 22 },
  tech: { fontSize: fontSize.sm, color: colors.textSecondary, marginBottom: spacing.xs },
  copyright: { fontSize: fontSize.xs, color: colors.textSecondary, textAlign: 'center' },
  // New styles for enhanced About screen
  subsection: { marginBottom: spacing.lg },
  subsectionTitle: { fontSize: fontSize.md, fontWeight: '700', color: colors.primary, marginBottom: spacing.sm },
  bold: { fontWeight: '700', color: colors.text },
  featureItem: { fontSize: fontSize.sm, color: colors.textSecondary, lineHeight: 22, marginBottom: spacing.sm },
  subtitle: { fontSize: fontSize.sm, color: colors.textSecondary, marginBottom: spacing.md, fontStyle: 'italic' },
  infoRow: { marginBottom: spacing.md, paddingBottom: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border },
  infoLabel: { fontSize: fontSize.xs, fontWeight: '700', color: colors.textSecondary, marginBottom: spacing.xs, textTransform: 'uppercase' },
  infoValue: { fontSize: fontSize.sm, color: colors.text, lineHeight: 20 },
  linkValue: { fontSize: fontSize.sm, color: colors.primary, fontWeight: '600', textDecorationLine: 'underline' },
  quoteBox: { marginTop: spacing.lg, padding: spacing.md, backgroundColor: colors.primaryAlpha, borderLeftWidth: 4, borderLeftColor: colors.primary, borderRadius: 8 },
  quote: { fontSize: fontSize.sm, color: colors.text, fontStyle: 'italic', lineHeight: 20 },
});
