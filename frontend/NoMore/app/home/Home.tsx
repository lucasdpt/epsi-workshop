import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Background from '@/components/Background';
import Card from '@/components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Background />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardsContainer}>
          <Card
            name="Alcool"
            icon="downhill-skiing"
            color="#FFC107"
            number={8}
            frequency="an"
            times="fois"
            objective={8}
          />
          <Card
            name="Alcool"
            icon="wine-bar"
            color="#34459D"
            number={5}
            frequency="semaine"
            times="heure"
            objective={8}
          />
          <Card
            name="Cocaine"
            icon="apple"
            color="#FF5733"
            number={5}
            frequency="jour"
            times="fois"
            objective={5}
          />
          <Card
            name="LSD"
            icon="apple"
            color="#33FF57"
            number={4}
            frequency="mois"
            times="fois"
            objective={3}
          />
          <Card
            name="Réseaux sociaux"
            icon="apple"
            color="#3357FF"
            number={790}
            frequency="semaine"
            times="minute"
            objective={7}
          />
          <Card
            name="Cigarette"
            icon="apple"
            color="#FF33A1"
            number={1}
            frequency="jour"
            times="fois"
            objective={10}
          />
          <Card
            name="Fastfood"
            icon="apple"
            color="#A133FF"
            number={8}
            frequency="jour"
            times="fois"
            objective={8}
          />
        </View>
        <View style={[styles.card, { backgroundColor: "#001427" }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 2, justifyContent: 'space-between' }}>
            <Text style={[styles.name, { color: "white" }]}>Ajouter une addiction</Text>
            <Icon name="add-circle-outline" size={40} color="white" style={{ alignSelf: 'center' }} />
          </View>
        </View>
      </ScrollView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 20,
    margin: 10,
    width: "90%",
    borderRadius: 10,
    alignSelf: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 26,
    fontFamily: 'Roboto_700Bold',
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
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