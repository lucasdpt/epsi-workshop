import { View, Text, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    // Simulate login logic
    router.push('/home');
  };

  return (
    <View>
      <Text>Login Page</Text>
      <Button title="Login" onPress={handleLogin} />
      <Link href="/register">Go to Register</Link>
    </View>
  );
}