import { NativeBaseProvider } from 'native-base';
import { Signup } from './src/screens/Signup';

export default function App() {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  );
}
