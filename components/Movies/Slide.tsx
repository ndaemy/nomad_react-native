import React from 'react'
import styled from 'styled-components/native'
import { apiImage } from '../../api'

const Container = styled.View`
  width: 100%;
  height: 100%;
`

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: absolute;
`

const Content = styled.View`
  flex-direction: row;
`

const Data = styled.View`
  width: 50%;
`

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const Votes = styled.Text`
  color: white;
  opacity: 0.7;
`

const Overview = styled.Text`
  color: white;
  opacity: 0.7;
`

interface Props {
  id: number
  title: string
  backgroundImage: string
  votes: number
  overview: string
}

export default function Slide(props: Props) {
  const { id, title, backgroundImage, votes, overview } = props

  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Data>
          <Title>{title}</Title>
          <Votes>{votes} / 10</Votes>
          <Overview>{overview}</Overview>
        </Data>
      </Content>
    </Container>
  )
}
