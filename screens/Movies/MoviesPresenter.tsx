import React from 'react'
import { Dimensions, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'

const { width, height } = Dimensions.get('screen')

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`

const Section = styled.View`
  background-color: red;
  height: 100%;
`

const Text = styled.Text``

type IProps = {
  loading: boolean
  nowPlaying: Array<any>
  popular: Array<any>
  upcoming: Array<any>
  nowPlayingError: string | null
  popularError: string | null
  upcomingError: string | null
}

export default function MoviesPresenter(props: IProps) {
  return (
    <Container>
      {props.loading ? (
        <ActivityIndicator color='white' size='small' />
      ) : (
        <Header>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {props.nowPlaying.map(movie => (
              <Section key={movie.id}>
                <Text>{movie.original_title}</Text>
              </Section>
            ))}
          </Swiper>
        </Header>
      )}
    </Container>
  )
}
