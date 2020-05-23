import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Poster from './Poster'
import { apiImage } from '../api'
import Votes from './Votes'

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 10px 0 5px 0;
`

interface Props {
  id: number
  poster: string
  title: string
  votes: number
}

export default function Vertical({ id, poster, title, votes }: Props) {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={apiImage(poster)} />
        <Title>{title.length > 10 ? `${title.slice(0, 10)}...` : title}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  )
}
