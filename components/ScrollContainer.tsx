import React from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'

interface Props {
  loading: boolean
  children: React.ReactChild[]
}

export default function ScrollContainer({ loading, children }: Props) {
  return (
    <ScrollView
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
