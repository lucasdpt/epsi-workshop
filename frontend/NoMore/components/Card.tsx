import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Detail from '@/app/detail';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface CardProps {
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

const Card: React.FC<CardProps> = ({ color, icon, name, number, frequency, times, objective }) => {
  const [count, setCount] = useState(number);
  const textColor = isColorLight(color) ? '#001427' : 'white';
  const router = useRouter();

  const handlePress = async () => {
    const data = {
      color,
      icon,
      name,
      number: count,
      frequency,
      times,
      objective,
    };
  
    try {
      await AsyncStorage.setItem('detailData', JSON.stringify(data));
      router.push('/detail');
    } catch (error) {
      console.error('Failed to save data to AsyncStorage', error);
    }
  };

  const numbertime = count + " " + times + (count > 1 && times !== "fois" ? 's' : '');
  const objectivetime = objective + " " + times + (objective > 1 && times === "heure" ? 's' : '');
  const freq = (frequency === "jour" ? "aujourd'hui"
                : frequency === "semaine" ? "cette semaine"
                : frequency === "mois" ? "ce mois" : "cette année");

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={handlePress}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 2 }}>
        <Icon name={icon} size={50} color={textColor} style={{marginRight : 5}} />
        <Text style={[styles.name, { color: textColor }]}>{name}</Text>
      </View>
      <View style={{ width: '100%',marginBottom: 15, height: 1, backgroundColor: textColor, alignSelf: 'center', marginVertical: 10 }} />
      <Text style={[styles.number, { color: textColor,marginBottom: 10 }]}>{numbertime} {freq}</Text>
      <Text style={[styles.objective, { color: textColor,marginBottom: 5 }]}>Objectif :</Text>
      <Text style={[styles.obj, { color: textColor, marginBottom: 1 }]}>Moins de {objectivetime} par {frequency}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.positiveButton]} 
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.negativeButton]} 
          onPress={() => setCount(count > 0 ? count - 1 : 0)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    width: "90%",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: "100%",
    marginTop: 15,
  },
  button: {
    padding: 15,
    width: 100, // Ajuster la taille si besoin
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  positiveButton: {
    backgroundColor: '#38DB52', // Couleur du bouton +
    borderBottomLeftRadius : 12,
    borderTopLeftRadius : 12,
    borderBottomRightRadius : 0,
    borderTopRightRadius : 0,
    width: "50%",
  },
  negativeButton: {
    backgroundColor: '#FF1111', // Couleur du bouton -
    width: "50%",
    borderBottomLeftRadius : 0,
    borderTopLeftRadius : 0,
    borderBottomRightRadius : 12,
    borderTopRightRadius : 12,

  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default Card;
