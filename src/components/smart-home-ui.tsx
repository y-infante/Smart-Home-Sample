import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ReactNode } from 'react';

import { Colors, Spacing } from '@/constants/theme';

export type Device = {
  icon: string;
  name: string;
  detail: string;
  accent: string;
  location?: string;
};

export function ScreenHeader({ title, onBack }: { title: string; onBack?: () => void }) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <Pressable accessibilityLabel="Go back" onPress={onBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
      ) : (
        <View style={styles.headerSpacer} />
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
}

export function SectionTitle({ children, style }: { children: ReactNode; style?: object }) {
  return <Text style={[styles.sectionTitle, style]}>{children}</Text>;
}

export function StatusBadge({ icon, color }: { icon: string; color: string }) {
  return (
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Text style={styles.badgeIcon}>{icon}</Text>
    </View>
  );
}

export function DeviceCard({ device }: { device: Device }) {
  return (
    <View style={styles.card}>
      <StatusBadge icon={device.icon} color={device.accent} />
      <SectionTitle style={styles.cardName}>{device.name}</SectionTitle>
      <SectionTitle style={styles.cardDetail}>{device.detail}</SectionTitle>
    </View>
  );
}

export function DeviceGrid({ devices }: { devices: Device[] }) {
  return (
    <View style={styles.grid}>
      {devices.map((device) => <DeviceCard key={device.name} device={device} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 74,
    backgroundColor: Colors.light.background,
    borderBottomWidth: 1,
    borderBottomColor: '#d7d7d7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
  },
  headerTitle: { fontSize: 25, fontWeight: '800', letterSpacing: 1 },
  headerSpacer: { width: 32 },
  backButton: { padding: Spacing.one },
  backIcon: { fontSize: 34, lineHeight: 34, color: Colors.light.text },
  sectionTitle: { fontSize: 36, lineHeight: 44, fontWeight: '800', color: Colors.light.text },
  badge: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center' },
  badgeIcon: { fontSize: 28 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three, marginTop: Spacing.three },
  card: {
    width: '47%',
    minHeight: 124,
    borderWidth: 1,
    borderColor: Colors.light.text,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.two,
  },
  cardName: { fontSize: 20, lineHeight: 26, marginTop: Spacing.one },
  cardDetail: { fontSize: 17, lineHeight: 24 },
});
