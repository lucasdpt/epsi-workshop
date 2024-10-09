import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
  color: string;
  name: string;
  number: number;
  frequency: string;
  times: string;
  objective: number;
}

const Card: React.FC<CardProps> = ({ color, name, number, frequency, times, objective }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>Number: {number}</Text>
      <Text style={styles.frequency}>Frequency: {frequency}</Text>
      <Text style={styles.times}>Times: {times}</Text>
      <Text style={styles.objective}>Objective: {objective}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 16,
  },
  frequency: {
    fontSize: 16,
  },
  times: {
    fontSize: 16,
  },
  objective: {
    fontSize: 16,
  },
});

export default Card;