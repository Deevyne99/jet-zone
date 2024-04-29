import { StatusBar } from 'expo-status-bar'
import { StyleSheet, FlatList, View } from 'react-native'

import FeedScreen from './src/screens/FeedScreen'
import CreatePostScreen from './src/screens/CreatePostScreen'
export default function App() {
  return (
    <View style={styles.container}>
      {/* Post component */}
      <CreatePostScreen />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
