import { View, Text, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { Button } from "react-native-paper";
import Background from '@/components/Background';
import { StyleSheet } from 'react-native';
import ProfileForm from '@/components/ProfileForm';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const data = { loginWithService: false, passwordLength: 8, username: "user6767", email: "test@test.ts" }

const handlePress = () => {
  return "OK"
}

export default function AccountScreen() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  const handleDeleteAccount = () => {
    router.push('/register');
  };

  return (
    <View style={{ flex: 1 }}>
      <Background style={StyleSheet.absoluteFillObject} />
      <ScrollView contentContainerStyle={{ alignItems: 'center', width: "100%", justifyContent: 'center' }}>
        <View style={styles.profilePictureContainer}>
          <Image
            source={require('@/assets/images/ProfilePicture.svg')}
            style={styles.profilePicture}
          />
        </View>
        <Text style={styles.username}>
          {data.username}
        </Text>
        <ProfileForm data={data} />
        <Button
          mode="contained"
          onPress={handlePress}
          style={[
            styles.button,
            username === data.username && email === data.email && styles.disabledButton,
          ]}
          disabled={username === data.username && email === data.email}
          labelStyle={styles.buttonText}
        >
          Apply changes
        </Button>
        <TouchableOpacity onPress={handleLogout} style={{ alignSelf: 'flex-start' }}>
          <Text style={styles.textbtn}>
            Se déconnecter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteAccount} style={{ alignSelf: 'flex-start' }}>
          <Text style={styles.textbtn}>
            Supprimer mon compte
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePictureContainer: {
    width: 110,
    height: 110,
    borderRadius: 180,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 30,
    fontFamily: 'Roboto_700Bold',
    fontWeight: 'bold',
  },
  textbtn: {
    fontSize: 24,
    marginLeft: 40,
    color: '#FB0102',
    marginVertical: 10,
    fontFamily: 'Roboto_700Bold',
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor: '#001427',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
});