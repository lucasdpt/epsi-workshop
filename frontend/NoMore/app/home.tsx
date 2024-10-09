import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/Home';
import SettingsScreen from './home/Settings';
import AccountScreen from './home/Account';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}