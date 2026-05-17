import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
};

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const theme = useMemo(() => {
    return isDarkMode ? CombinedDarkTheme : CombinedDefaultTheme;
  }, [isDarkMode]);

  useEffect(() => {
    // Configure navigation bar based on theme
    const setupNavigationBar = async () => {
      const backgroundColor = isDarkMode ? '#1c1b1f' : '#ffffff';
      const buttonStyle = isDarkMode ? 'light' : 'dark';
      
      await NavigationBar.setBackgroundColorAsync(backgroundColor);
      await NavigationBar.setButtonStyleAsync(buttonStyle);
    };
    
    setupNavigationBar();
  }, [isDarkMode]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <PaperProvider theme={theme}>
        <Drawer
          screenOptions={{
            headerShown: false,
            drawerType: 'front',
          }}
        >
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: 'Home',
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="profile"
            options={{
              drawerLabel: 'Profile',
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="about"
            options={{
              drawerLabel: 'About',
              drawerIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="information" size={size} color={color} />
              ),
            }}
          />
        </Drawer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
