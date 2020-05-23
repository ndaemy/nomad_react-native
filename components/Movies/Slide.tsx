import React from 'react'
import styled from 'styled-components/native'
import { apiImage } from '../../api'
import Poster from '../Poster'
import Votes from '../Votes'

const Container = styled.View`
  width: 100%;
  height: 100%;
`

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`

const Title = styled.Text`
  color: white;
  margin-bottom: 10px;
  font-size: 19px;
  font-weight: bold;
`

const VotesContainer = styled.View`
  margin-bottom: 7px;
`

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`

const Button = styled.View`
  margin-top: 10px;
  padding: 7px 10px;
  background-color: #e74c3c;
  border-radius: 3px;
`

const ButtonText = styled.Text`
  color: white;
`

interface Props {
  id: number
  title: string
  votes: number
  overview: string
  poster: string
  backgroundImage: string
}

export default function Slide(props: Props) {
  const { id, title, votes, overview, poster, backgroundImage } = props

  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={apiImage(poster)} />
        <Data>
          <Title>
            {title.length > 40 ? `${title.slice(0, 40)}...` : title}
          </Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{overview.slice(0, 110)}...</Overview>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </Data>
      </Content>
    </Container>
  )
}
