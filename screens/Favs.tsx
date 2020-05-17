import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { movieApi } from '../api'

export default function Favs() {
  const [movies, setMovies] = useState({
    results: [],
    error: null,
  })

  async function getData() {
    const [results, error] = await movieApi.discover()
    setMovies({
      results,
      error,
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text style={{ color: 'white' }}>{movies.results.length}</Text>
    </View>
  )
}
