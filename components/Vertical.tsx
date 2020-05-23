import React from 'react'
import styled from 'styled-components/native'
import Poster from './Poster'
import { apiImage } from '../api'
import Votes from './Votes'

const Container = styled.View``

const Title = styled.Text`
  color: white;
`

interface Props {
  poster: string
  title: string
  votes: number
}

export default function Vertical({ poster, title, votes }: Props) {
  return (
    <Container>
      <Poster url={apiImage(poster)} />
      <Title>{title}</Title>
      <Votes votes={votes} />
    </Container>
  )
}
