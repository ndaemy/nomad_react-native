import React from 'react'
import styled from 'styled-components/native'

const Text = styled.Text`
  color: rgb(220, 220, 220);
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 500;
`

interface Props {
  votes: number
}

const Votes = ({ votes }: Props) => <Text>⭐️ {votes} / 10</Text>

export default Votes
