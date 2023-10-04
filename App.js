import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
        <Router />
    </NavigationContainer>
  );
}
