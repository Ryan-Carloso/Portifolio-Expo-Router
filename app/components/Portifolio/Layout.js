// Layout.js
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            title: 'Portfolio',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="components/Portifolio/ShibaHelperScreen" 
          options={{ title: 'Shiba Helper' }}
        />
        <Stack.Screen 
          name="components/Portifolio/SecurebitScreen" 
          options={{ title: 'Securebit' }}
        />
        <Stack.Screen 
          name="components/Portifolio/GeoFinderScreen" 
          options={{ title: 'GeoFinder' }}
        />
        <Stack.Screen 
          name="components/Portifolio/PortfolioScreen" 
          options={{ title: 'Portfolio Details' }}
        />
      </Stack>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default Layout;
