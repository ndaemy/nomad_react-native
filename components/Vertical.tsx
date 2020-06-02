import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Poster from './Poster'
import Votes from './Votes'
import { trimText } from '../utils'

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
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes > 0 && <Votes votes={votes} />}
      </Container>
    </TouchableOpacity>
  )
}
