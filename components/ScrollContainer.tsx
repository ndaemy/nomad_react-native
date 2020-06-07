import React, { useState } from 'react'
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native'

interface Props {
  loading: boolean
  children: Element | React.ReactChild | React.ReactChildren
  contentContainerStyle?: object
  refreshFn?: Function
}

export default function ScrollContainer(props: Props) {
  const { loading, children, contentContainerStyle, refreshFn } = props

  const [refreshing, setRefreshing] = useState(false)

  async function onRefresh() {
    setRefreshing(true)
    await refreshFn()
    setRefreshing(false)
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          tintColor='white'
        />
      }
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? 'center' : 'flex-start',
        ...contentContainerStyle,
      }}
    >
      {loading ? <ActivityIndicator color='white' size='small' /> : children}
    </ScrollView>
  )
}
