import React from 'react'
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native'

interface Props {
  loading: boolean
  children: Element | null
}

export default function ScrollContainer({ loading, children }: Props) {
  return (
    <ScrollView
      refreshControl={<RefreshControl tintColor='white' />}
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? 'center' : 'flex-start',
      }}
    >
      {loading ? <ActivityIndicator color='white' size='small' /> : children}
    </ScrollView>
  )
}
