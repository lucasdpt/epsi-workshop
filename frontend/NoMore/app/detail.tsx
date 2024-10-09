import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    <View style={[styles.container, { backgroundColor: color }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 2 }}>
        <Icon name={icon} size={50} color={textColor} style={{ marginRight: 5 }} />
        <Text style={[styles.name, { color: textColor }]}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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