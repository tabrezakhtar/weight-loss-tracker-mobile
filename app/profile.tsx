import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Appbar, Card, List, Text } from 'react-native-paper';

export default function ProfileScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Action 
          icon="menu" 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
        />
        <Appbar.Content title="Profile" />
      </Appbar.Header>
      <View style={styles.content}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="bodyMedium">
            Your profile information will appear here.
          </Text>
        </Card.Content>
      </Card>
      <List.Section>
        <List.Item
          title="Name"
          description="Your name"
          left={props => <List.Icon {...props} icon="account" />}
        />
        <List.Item
          title="Email"
          description="Your email"
          left={props => <List.Icon {...props} icon="email" />}
        />
      </List.Section>
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
});
