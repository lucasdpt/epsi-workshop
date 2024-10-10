import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';



interface DetailProps {
  color: string;
  icon: string;
  name: string;
  number: number;
  frequency: string;
  times: string;
  objective: number;
}

const isColorLight = (color: string): boolean => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};

const Detail: React.FC = () => {
  const [data, setData] = useState<DetailProps | null>(null);
  const router = useRouter();
  const [numbr, setNumber] = useState('');
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState('fois');
  const [items1, setItems1] = useState([
    { label: 'fois', value: 'fois' },
    { label: 'heure', value: 'heure' }
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState('par jour');
  const [items2, setItems2] = useState([
    { label: 'par jour', value: 'par jour' },
    { label: 'par semaine', value: 'par semaine' },
    { label: 'par mois', value: 'par mois' }
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await AsyncStorage.getItem('detailData');
        if (jsonData) {
          setData(JSON.parse(jsonData));
        }
      } catch (error) {
        console.error('Failed to load data from AsyncStorage', error);
      }
    };

    fetchData();
  }, []);

  if (!data) return null;

  const { color, icon, name, number, frequency, times, objective } = data;
  const textColor = isColorLight(color) ? '#001427' : 'white';

  const numbertime = number + " " + times + (number > 1 && times !== "fois" ? 's' : '');
  const objectivetime = objective + " " + times + (objective > 1 && times === "heure" ? 's' : '');
  const freq = (frequency === "jour" ? "aujourd'hui"
    : frequency === "semaine" ? "cette semaine"
      : frequency === "mois" ? "ce mois" : "cette année");

  return (
    <View style={styles.container}>
      <View style={[styles.containertop, { backgroundColor: color }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 2 }}>
          <Icon name={icon} size={50} color={textColor} style={{ marginRight: 5 }} />
          <Text style={[styles.name, { color: textColor }]}>{name}</Text>
        </View>
      </View>
      <View style={[styles.card, { backgroundColor: color }]}>
        <Text style={[styles.titlecard, { color: textColor }]}>Objectif :</Text>
        <Text style={[styles.textcard, { color: textColor }]}>Je souhaite limiter ma consommation à </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop : 20 }}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={number.toString()}
            onChangeText={setNumber}
          />
          <DropDownPicker
            open={open1}
            value={value1}
            items={items1}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
            style={styles.dropdown}
            containerStyle={{ width: 89 }}
            textStyle={{ color: '#001427' }}
          />
          <DropDownPicker
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            style={styles.dropdown}
            containerStyle={{ width: 135 }}
            textStyle={{ color: '#001427' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: "100%",
  },
  containertop: {
    flex: 0.3,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    width: "100%",
  },
  card: {
    justifyContent: 'center',
    padding: 20,
    width: "85%",
    margin: 20,
    borderRadius: 16,
  },
  titlecard: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 48,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 5,
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: 60,
  },
  dropdown: {
    height: 30,
    marginRight: 10,
  },
  textcard: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  name: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 24,
    fontFamily: 'Roboto_700Bold',
    fontWeight: 'bold',
  },
  obj: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    fontWeight: 'normal',
  },
  objective: {
    fontSize: 20,
    fontFamily: 'Roboto_400Regular',
  },
});

export default Detail;