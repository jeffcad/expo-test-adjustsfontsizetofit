import { View, Text, StyleSheet } from 'react-native'

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} adjustsFontSizeToFit={true}>Screen 2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})