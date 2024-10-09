import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Background from '@/components/Background';
import Card from '@/components/Card';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Background style={styles.background} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardsContainer}>
          <Card
            name="Alcool"
            icon="creditcard"
            color="#FFC107"
            number={8}
            frequency="an"
            times="fois"
            objective={8}
          />
          <Card
            name="Alcool"
            icon="creditcard"
            color="#34459D"
            number={5}
            frequency="semaine"
            times="heure"
            objective={8}
          />
          <Card
            name="Cocaine"
            icon="creditcard"
            color="#FF5733"
            number={5}
            frequency="jour"
            times="fois"
            objective={5}
          />
          <Card
            name="LSD"
            icon="creditcard"
            color="#33FF57"
            number={4}
            frequency="mois"
            times="fois"
            objective={3}
          />
          <Card
            name="Réseaux sociaux"
            icon="creditcard"
            color="#3357FF"
            number={790}
            frequency="semaine"
            times="minute"
            objective={7}
          />
          <Card
            name="Cigarette"
            icon="creditcard"
            color="#FF33A1"
            number={1}
            frequency="jour"
            times="fois"
            objective={10}
          />
          <Card
            name="Fastfood"
            icon="creditcard"
            color="#A133FF"
            number={8}
            frequency="jour"
            times="fois"
            objective={8}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});