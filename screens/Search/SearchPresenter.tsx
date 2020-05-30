import React from 'react'
import styled from 'styled-components/native'
import Input from '../../components/Search/Input'

const Container = styled.ScrollView`
  background-color: black;
`

interface Props {}

export default function SearchPresenter({}: Props) {
  return (
    <Container>
      <Input placeholder='Write a keyword' />
    </Container>
  )
}
