import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  DeviceGrid,
  ScreenHeader,
  SectionTitle,
  StatusBadge,
  type Device,
} from '@/components/smart-home-ui';
import { Colors, Spacing } from '@/constants/theme';

const devices: Device[] = [
  { icon: '💡', name: 'Light', detail: 'ON', accent: '#1588c9' },
  { icon: '❄️', name: 'AC', detail: '24°C', accent: '#5d9dcc' },
  { icon: '🔒', name: 'Door', detail: 'LOCKED', accent: '#1976d2' },
  { icon: '📷', name: 'Camera', detail: 'ON', accent: '#e7a04e' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader title="Smart Home" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heading}>
          <SectionTitle>Smart Home</SectionTitle>
          <Pressable
            accessibilityLabel="Open settings"
            onPress={() => router.push('/settings')}
            style={({ pressed }) => [styles.settingsButton, pressed && styles.pressed]}>
            <StatusBadge icon="⚙️" color="#148fe0" />
          </Pressable>
        </View>

        <View style={styles.temperatureCard}>
          <StatusBadge icon="🌡️" color="#159be8" />
          <View style={styles.temperature}>
            <SectionTitle style={styles.temperatureValue}>26°C</SectionTitle>
            <SectionTitle style={styles.room}>Living Room</SectionTitle>
          </View>
        </View>

        <DeviceGrid devices={devices} />

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/explore')}
          style={({ pressed }) => [styles.viewAll, pressed && styles.pressed]}>
          <SectionTitle style={styles.viewAllText}>View All Devices →</SectionTitle>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.light.backgroundElement },
  content: { padding: Spacing.four, paddingBottom: Spacing.six },
  heading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: Spacing.four },
  settingsButton: { padding: Spacing.one },
  temperatureCard: {
    minHeight: 378,
    borderWidth: 1,
    borderColor: Colors.light.text,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.four,
  },
  temperature: { alignItems: 'center', marginTop: Spacing.four },
  temperatureValue: { fontSize: 56, lineHeight: 64 },
  room: { fontSize: 22, lineHeight: 30, marginTop: Spacing.one },
  viewAll: { alignItems: 'center', paddingVertical: Spacing.four },
  viewAllText: { fontSize: 20, lineHeight: 28 },
  pressed: { opacity: 0.65 },
});
