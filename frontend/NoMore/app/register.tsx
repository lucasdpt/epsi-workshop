import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import FormInput from '@/components/FormInput';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const theme = useTheme();

  const handleLogin = () => {
    // Simulate login logic
    router.push('/home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/LogoNoMore.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.title}>S'enregistrer</Text>
      <FormInput
        style={styles.input}
        title="Nom d'utilisateur"
        icon={{ name: "person", width: 27, height: 27 }}
        onChangeText={setUsername}
      />
      <FormInput
        style={styles.input}
        title="Email"
        secure={true}
        icon={{ name: "email", width: 27, height: 27 }}
        onChangeText={setEmail}
      />
      <FormInput
        style={styles.input}
        title="Mot de passe"
        secure={true}
        icon={{ name: "lock", width: 27, height: 27 }}
        onChangeText={setPassword}
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Valider
      </Button>
      <Link href="/login" style={styles.link}>Vous avez déjà un compte ?
      Connectez-vous ici</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 50,
    marginTop: 120,
    marginBottom: 140,
    color: '#001427',
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 12,
    width: '80%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 600, 
    height: 600, 
    opacity: 0.2,
    transform: [{ translateX: -120 }, { translateY: -130 }], 
    zIndex: -1, 
  },
  button: {
    marginBottom: 20,
    marginTop: 60,
    width: "70%",
    height: 64,
    alignSelf: 'center',
    borderRadius: 90,
    backgroundColor: 'rgba(0, 20, 39, 1)',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    fontSize: 16,
    marginTop: 16,
    color: '#001427',
    textAlign: 'center',
    fontFamily: 'Roboto_700Bold',
    fontWeight: 'bold',
  },
});