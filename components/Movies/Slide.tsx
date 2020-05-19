import React from 'react'
import { Dimensions, Image } from 'react-native'
import styled from 'styled-components/native'
import { apiImage } from '../../api'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen')

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  background-color: red;
`

const BG = styled.Image`
  width: 100%;
  height: 100%;
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
    </Container>
  )
}
