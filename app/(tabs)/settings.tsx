import { StyleSheet, View } from 'react-native';
import { Card, List, Text } from 'react-native-paper';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>
            Settings
          </Text>
        </Card.Content>
      </Card>
      <List.Section>
        <List.Item
          title="Profile"
          description="Manage your profile"
          left={props => <List.Icon {...props} icon="account" />}
        />
        <List.Item
          title="Notifications"
          description="Manage notifications"
          left={props => <List.Icon {...props} icon="bell" />}
        />
        <List.Item
          title="About"
          description="App information"
          left={props => <List.Icon {...props} icon="information" />}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
  },
});
