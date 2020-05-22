import React from 'react'
import styled from 'styled-components/native'

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 24px;
`

interface Props {
  title: string
}

export default function Title({ title }: Props) {
  return <Text>{title}</Text>
}
