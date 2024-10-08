import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  const handleRegister = () => {
    // Simulate registration logic
    router.push('/home');
  };

  return (
    <View>
      <Text>Register Page</Text>
      <Button title="Register" onPress={handleRegister} />
      <Link href="/login">Go to Login</Link>
    </View>
  );
}