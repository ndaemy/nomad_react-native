import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { movieApi } from '../api'

export default function Movies() {
  async function getData() {
    const [nowPlaying, error] = await movieApi.nowPlaying()
    const [popular, popularError] = await movieApi.popular()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Movies</Text>
    </View>
  )
}
