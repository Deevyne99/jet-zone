import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, Image, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function App() {
  const post = {
    id: 'p1',
    createdAt: '19 m',
    User: {
      id: 'u1',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
      name: 'Vadim Savin',
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
    numberOfLikes: 11,
    numberOfShares: 2,
  }

  return (
    <View style={styles.container}>
      {/* Post component */}
      <View style={styles.post}>
        {/* Post Header with details about the author */}
        <View style={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name='dots-three-horizontal'
            size={18}
            color='gray'
            style={styles.icon}
          />
        </View>

        {/* Post body with description and image */}

        {/* Post footer with likes and button */}
        <View style={styles.footer}></View>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
  icon: {
    marginLeft: 'auto',
  },
})
