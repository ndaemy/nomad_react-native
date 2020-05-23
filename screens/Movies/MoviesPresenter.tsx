import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import Slide from '../../components/Movies/Slide'
import Title from '../../components/Movies/Title'
import Vertical from '../../components/Vertical'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
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
  const {
    loading,
    nowPlaying,
    popular,
    upcoming,
    nowPlayingError,
    popularError,
    upcomingError,
  } = props

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color='white' size='small' />
      ) : (
        <ScrollView
          contentContainerStyle={{
            justifyContent: loading ? 'center' : 'flex-start',
          }}
        >
          <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={3}>
              {nowPlaying.map(movie => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  poster={movie.poster_path}
                  backgroundImage={movie.backdrop_path}
                />
              ))}
            </Swiper>
          </SliderContainer>
          <Container>
            <Title title={'Popular Movies'} />
            <ScrollView horizontal>
              {popular.map(movie => (
                <Vertical
                  key={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  votes={movie.vote_average}
                />
              ))}
            </ScrollView>
          </Container>
        </ScrollView>
      )}
    </Container>
  )
}
