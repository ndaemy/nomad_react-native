import React from 'react'
import styled from 'styled-components/native'
import Poster from './Poster'
import { trimText } from '../utils'
import { TouchableOpacity } from 'react-native'

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`

const ReleaseDate = styled.Text`
  color: white;
  font-size: 12px;
`

const Overview = styled.Text`
  margin-top: 10px;
  color: white;
`

interface Props {
  id: number
  title: string
  overview: string
  releaseDate?: string
  poster: string
}

export default function Horizontal(props: Props) {
  const { id, title, poster, releaseDate, overview } = props
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          {releaseDate ? <ReleaseDate>{releaseDate}</ReleaseDate> : null}
          <Overview>{trimText(overview, 130)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  )
}
