import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import Slide from '../../components/Movies/Slide'

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`

interface Props {
  loading: boolean
  nowPlaying: Array<any>
  popular: Array<any>
  upcoming: Array<any>
  nowPlayingError: string | null
  popularError: string | null
  upcomingError: string | null
}

export default function MoviesPresenter(props: Props) {
  return (
    <Container>
      {props.loading ? (
        <ActivityIndicator color='white' size='small' />
      ) : (
        <>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {props.nowPlaying.map(movie => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.original_language}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
              />
            ))}
          </Swiper>
        </>
      )}
    </Container>
  )
}
