import React from 'react'
import ScrollContainer from '../../components/ScrollContainer'
import Vertical from '../../components/Vertical'
import HorizontalSlider from '../../components/HorizontalSlider'
import styled from 'styled-components/native'
import List from '../../components/List'
import Horizontal from '../../components/Horizontal'

const Container = styled.View`
  margin-top: 30px;
`

interface Props {
  refreshFn: Function
  loading: boolean
  popular: Array<any>
  topRated: Array<any>
  today: Array<any>
}

export default function TVPresenter(props: Props) {
  const { refreshFn, loading, popular, topRated, today } = props

  return (
    <ScrollContainer refreshFn={refreshFn} loading={loading}>
      <Container>
        <HorizontalSlider title='Popular Shows'>
          {popular.map(show => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title='Top Rated'>
          {topRated.map(show => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title='Airing Today'>
          {today.map(show => (
            <Horizontal
              key={show.id}
              id={show.id}
              title={show.name}
              poster={show.poster_path}
              overview={show.overview}
            />
          ))}
        </List>
      </Container>
    </ScrollContainer>
  )
}
