import React from 'react'
import styled from 'styled-components/native'
import Poster from './Poster'
import { apiImage } from '../api'
import Votes from './Votes'

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`

const Data = styled.View``

const Title = styled.Text`
  color: white;
  font-weight: 500;
`

interface Props {
  id: number
  title: string
  votes: number
  overview: string
  poster: string
}

export default function Horizontal(props: Props) {
  const { id, title, votes, poster, overview } = props
  return (
    <Container>
      <Poster url={apiImage(poster)} />
      <Data>
        <Title>{title}</Title>
        <Votes votes={votes} />
      </Data>
    </Container>
  )
}
