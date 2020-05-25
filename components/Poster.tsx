import React from 'react'
import styled from 'styled-components/native'
import { apiImage } from '../api'

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`

interface Props {
  url: string
}

export default function Poster({ url }: Props) {
  return <Image source={{ uri: apiImage(url) }} />
}
