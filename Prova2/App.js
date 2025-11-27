import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MyAppointmentsScreen from './screens/MyAppointmentsScreen';
import TeamAppointmentsScreen from './screens/TeamAppointmentsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen
          name="Meus compromissos"
          component={MyAppointmentsScreen}
        />
        <Stack.Screen
          name="Compromissos da equipe"
          component={TeamAppointmentsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
