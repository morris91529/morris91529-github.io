import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled, { css } from 'styled-components'

  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid dark blue;
  color: lime;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-align: center;
  display: block;

    ${props => props.primary && css`
      background: lime;
      color: black;
    `}
  `;


const Home: NextPage = () => {

  return (
    <div>
      <Button>Button</Button>
      <Button primary>Button2</Button>
    </div>
  )
}

export default Home