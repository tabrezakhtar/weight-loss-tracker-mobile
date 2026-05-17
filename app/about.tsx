import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper';

export default function AboutScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={() => router.back()} /> */}
        <Appbar.Action 
          icon="menu" 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
        />
        <Appbar.Content title="About" />
      </Appbar.Header>
      <View style={styles.content}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="bodyMedium" style={styles.text}>
            Weight Loss Tracker Mobile App
          </Text>
          <Text variant="bodySmall" style={styles.text}>
            Version 1.0.0
          </Text>
          <Text variant="bodySmall" style={styles.text}>
            Built with React Native and React Native Paper
          </Text>
        </Card.Content>
      </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
  text: {
    marginTop: 8,
  },
});
