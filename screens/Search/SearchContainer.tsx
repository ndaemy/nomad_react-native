import React, { useState } from 'react'
import SearchPresenter from './SearchPresenter'
import { movieApi, tvApi } from '../../api'

interface Props {}

export default function SearchContainer({}: Props) {
  const [keyword, setKeyword] = useState('')
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showError: null,
  })

  const onChange = (text: string) => setKeyword(text)

  const onSubmit = async () => {
    if (keyword === '') return
    const [movies, movieError] = await movieApi.search(keyword)
    const [shows, showError] = await tvApi.search(keyword)
    setResults({
      movies,
      shows,
      movieError,
      showError,
    })
  }

  return (
    <SearchPresenter
      keyword={keyword}
      {...results}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  )
}
