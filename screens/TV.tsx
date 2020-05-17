import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { tvApi } from '../api'

export default function TV() {
  const [shows, setShows] = useState({
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    topRatedError: null,
    popularError: null,
  })

  async function getData() {
    const [today, todayError] = await tvApi.today()
    const [thisWeek, thisWeekError] = await tvApi.thisWeek()
    const [topRated, topRatedError] = await tvApi.topRated()
    const [popular, popularError] = await tvApi.popular()
    setShows({
      today,
      thisWeek,
      topRated,
      popular,
      todayError,
      thisWeekError,
      topRatedError,
      popularError,
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <Text style={{ color: 'white' }}>{shows.popular?.length}</Text>
    </View>
  )
}
