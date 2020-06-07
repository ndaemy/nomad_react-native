import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import Slide from '../../components/Movies/Slide'
import Vertical from '../../components/Vertical'
import Horizontal from '../../components/Horizontal'
import ScrollContainer from '../../components/ScrollContainer'
import HorizontalSlider from '../../components/HorizontalSlider'
import List from '../../components/List'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`

const Container = styled.View``

interface Props {
  refreshFn: Function
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
    refreshFn,
    loading,
    nowPlaying,
    popular,
    upcoming,
    nowPlayingError,
    popularError,
    upcomingError,
  } = props

  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      <>
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
          <HorizontalSlider title='Popular Movies'>
            {popular.map(movie => (
              <Vertical
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </HorizontalSlider>
          <List title='Coming soom'>
            {upcoming.map(movie => (
              <Horizontal
                key={movie.id}
                id={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                overview={movie.overview}
              />
            ))}
          </List>
        </Container>
      </>
    </ScrollContainer>
  )
}
