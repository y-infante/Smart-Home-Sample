import { router } from 'expo-router';
import { StyleSheet, Switch, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader, SectionTitle } from '@/components/smart-home-ui';
import { Colors, Spacing } from '@/constants/theme';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader title="Settings" onBack={() => router.back()} />
      <View style={styles.content}>
        <SectionTitle>Settings</SectionTitle>
        <View style={styles.rows}>
          <View style={styles.row}>
            <SectionTitle style={styles.label}>Notifications</SectionTitle>
            <Switch accessibilityLabel="Notifications" />
          </View>
          <View style={styles.row}>
            <SectionTitle style={styles.label}>Temperature Unit</SectionTitle>
            <SectionTitle style={styles.unit}>°C</SectionTitle>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.light.backgroundElement },
  content: { padding: Spacing.four, gap: Spacing.six },
  rows: { gap: Spacing.three },
  row: {
    minHeight: 56,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.text,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: { fontSize: 22, lineHeight: 28 },
  unit: { fontSize: 18, lineHeight: 24 },
});
