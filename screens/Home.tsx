import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({ navigation }: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title='Go to Detail'
      />
    </View>
  )
}
