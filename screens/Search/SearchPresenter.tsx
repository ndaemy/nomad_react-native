import React from 'react'
import styled from 'styled-components/native'
import Input from '../../components/Search/Input'
import HorizontalSlider from '../../components/HorizontalSlider'
import Horizontal from '../../components/Horizontal'

const Container = styled.ScrollView`
  background-color: black;
`

interface Props {
  keyword: string
  movies: Array<any>
  shows: Array<any>
  onChange(e: any): void
  onSubmit(e: any): void
}

export default function SearchPresenter(props: Props) {
  const { keyword, movies, shows, onChange, onSubmit } = props

  return (
    <Container>
      <Input
        placeholder='Write a keyword'
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <HorizontalSlider title={'Movie results'}>
        {movies.map(movie => (
          <Horizontal />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title={'TV results'}>
        {shows.map(show => (
          <Horizontal />
        ))}
      </HorizontalSlider>
    </Container>
  )
}
