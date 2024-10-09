import { View, Text } from 'react-native';
import Background from '@/components/Background';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Background/>|
      <Text>Settings Page</Text>
    </View>
  );
}