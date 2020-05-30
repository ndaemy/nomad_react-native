import React from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  background-color: white;
`

interface Props {
  placeholder: string
  value: string
  onChange(e: any): void
  onSubmit(e: any): void
}

export default function Input(props: Props) {
  const { placeholder, value, onChange, onSubmit } = props

  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType='search'
    />
  )
}
