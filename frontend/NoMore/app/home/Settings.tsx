import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import Background from '@/components/Background';
import {Slider} from '@miblanchard/react-native-slider';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, paddingTop : 80, paddingLeft : 15 }}>
      <Background />
      <Text style={styles.title}>Type de notification</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems : 'center', paddingVertical : 10}}>
        <Switch value={true} color="#708D81"/>
        <Text style={styles.text}>Notification push</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems : 'center', paddingVertical : 10}}>
        <Switch value={true} color="#708D81"/>
        <Text style={styles.text}>Email</Text>
      </View>
      <Text style={styles.title}>Fréquence de notification</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems : 'center',paddingVertical : 10}}>
        <Switch value={true} color="#708D81"/>
        <Text style={styles.text}>Quotidien</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems : 'center', paddingVertical : 10}}>
        <Switch value={true} color="#708D81"/>
        <Text style={styles.text}>Hebdomadaire</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems : 'center', paddingVertical : 10}}>
        <Switch value={true} color="#708D81"/>
        <Text style={styles.text}>Mensuel</Text>
      </View>
      <Text style={styles.title}>Accesibilité</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'left', alignItems : 'center', paddingVertical : 10}}>
        <Switch value={true} color="#708D81"/>
        <Text style={styles.text}>Contraste élevé</Text>
      </View>
      <Text style={styles.text}>Taille de police</Text>
      <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', paddingVertical: 10 }}>
        <Text style={styles.text}>x0.1</Text>
        <Text style={styles.text}>x2</Text>
      </View>
      <View style={{width: "85%", alignSelf: 'center', }}>
        <Slider maximumValue={2} minimumValue={0.5} value={1}/>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    color: "#001427",
    fontFamily: 'Roboto_700Bold',
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'left',
    color: "#001427",
    fontFamily: 'Roboto_700Bold',
    marginLeft: 10,
  },
});