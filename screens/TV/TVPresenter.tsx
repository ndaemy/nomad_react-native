import React from 'react'
import ScrollContainer from '../../components/ScrollContainer'

interface Props {
  loading: boolean
}

export default function TVPresenter(props: Props) {
  const { loading } = props

  return <ScrollContainer loading={loading}></ScrollContainer>
}
