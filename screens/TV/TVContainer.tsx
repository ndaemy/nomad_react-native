import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { tvApi } from '../../api'
import TVPresenter from './TVPresenter'

export default function TV() {
  const [shows, setShows] = useState({
    loading: true,
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
      loading: false,
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

  return <TVPresenter refreshFn={getData} {...shows} />
}
