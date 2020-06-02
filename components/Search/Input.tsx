import React from 'react'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import styled from 'styled-components/native'

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px 30px;
  padding: 10px 20px;
  border-radius: 15px;
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
