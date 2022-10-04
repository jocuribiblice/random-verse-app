import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={
        {
          margin: 16,
          borderWidth: 2,
          borderColor: '#999',
          padding: 16
        }
      }>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
      </Text>
      <Text style={{margin: 16}}>
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
