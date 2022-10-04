import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
      </Text>
      <Text>
        (Lorem 2:7)
      </Text>
      <Button title='Next' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
