import React from 'react'
import styled from 'styled-components/native'
import Title from './Movies/Title'

const Container = styled.View`
  margin-top: 20px;
`

interface Props {
  title: string
  children: React.ReactChild[] | React.ReactChild
}

export default function List({ title, children }: Props) {
  return (
    <>
      <Title title={title} />
      <Container>{children}</Container>
    </>
  )
}
