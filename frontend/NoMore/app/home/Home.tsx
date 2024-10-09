import { ScrollView, View, Text } from 'react-native';
import Background from '@/components/Background';
import Card from '@/components/Card';

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Background />
        <Text>Home Page</Text>
        <Card
          name="Alcool"
          color="#FFC107"
          number={8}
          frequency="par an"
          times="fois"
          objective={8}
          />
      </View>
    </ScrollView>
  );
}