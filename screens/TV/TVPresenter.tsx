import React from 'react'
import ScrollContainer from '../../components/ScrollContainer'
import Vertical from '../../components/Vertical'
import HorizontalSlider from '../../components/HorizontalSlider'

interface Props {
  loading: boolean
  popular: Array<any>
  topRated: Array<any>
}

export default function TVPresenter(props: Props) {
  const { loading, popular, topRated } = props

  return (
    <ScrollContainer loading={loading}>
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
    </ScrollContainer>
  )
}
