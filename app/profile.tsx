import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { Appbar, Card, List, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Appbar.Header>
        <Appbar.Action 
          icon="menu" 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
        />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <ScrollView style={styles.content}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="bodyMedium">
            Your profile information will appear here.
          </Text>
        </Card.Content>
      </Card>
      <List.Section>
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
          <List.Item
            key={num}
            title={`Item ${num}`}
            description={`This is item number ${num}`}
            left={props => <List.Icon {...props} icon="star" />}
          />
        ))}
      </List.Section>
      </ScrollView>
    </SafeAreaView>
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
});
