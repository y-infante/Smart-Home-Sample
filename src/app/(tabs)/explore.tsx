import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader, SectionTitle, type Device } from '@/components/smart-home-ui';
import { Colors, Spacing } from '@/constants/theme';

const devices: Device[] = [
  { icon: '💡', name: 'Light', location: 'Living Room', detail: 'ON', accent: '#1588c9' },
  { icon: '❄️', name: 'Air Conditioner', location: 'Living Room', detail: '24°C', accent: '#5d9dcc' },
  { icon: '🔒', name: 'Door', location: 'Entryway', detail: 'LOCKED', accent: '#1976d2' },
  { icon: '📷', name: 'Camera', location: 'Entryway', detail: 'ON', accent: '#e7a04e' },
];

export default function DevicesScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader title="Settings" onBack={() => router.replace('/')} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <SectionTitle>My Devices</SectionTitle>
        {devices.map((device) => (
          <Pressable
            key={device.name}
            accessibilityRole="button"
            style={({ pressed }) => [styles.deviceRow, pressed && styles.pressed]}>
            <SectionTitle style={styles.deviceIcon}>{device.icon}</SectionTitle>
            <View style={styles.deviceCopy}>
              <SectionTitle style={styles.deviceName}>{device.name}</SectionTitle>
              <SectionTitle style={styles.location}>{device.location}</SectionTitle>
            </View>
            <SectionTitle style={[styles.detail, { color: device.accent }]}>{device.detail}</SectionTitle>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.light.backgroundElement },
  content: { padding: Spacing.four, gap: Spacing.three },
  deviceRow: {
    minHeight: 112,
    borderWidth: 1,
    borderColor: Colors.light.text,
    borderRadius: 16,
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceIcon: { fontSize: 30, marginRight: Spacing.three },
  deviceCopy: { flex: 1 },
  deviceName: { fontSize: 22, lineHeight: 28 },
  location: { fontSize: 17, lineHeight: 24 },
  detail: { fontSize: 17, lineHeight: 24, marginLeft: Spacing.two },
  pressed: { opacity: 0.65 },
});
