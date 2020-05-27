import React from 'react'
import { ScrollView } from 'react-native'
import Title from './Movies/Title'

interface Props {
  title: string
  children: React.ReactChild[]
}

export default function HorizontalSlider({ title, children }: Props) {
  return (
    <>
      <Title title={title} />
      <ScrollView
        style={{ marginTop: 20, marginBottom: 40 }}
        contentContainerStyle={{ paddingLeft: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </>
  )
}
