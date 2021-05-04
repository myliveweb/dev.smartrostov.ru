import React from 'react'
import styled from 'styled-components'
import SliderInfo from '../components/SliderInfo'

const BoxSlider = styled.div<{ primary?: boolean }>`
  height: 700px;
  background: ${(props) => (props.primary ? 'green' : 'transparent')};
`

export const Gallery: React.FC = () => {
  console.log('Render Gallery')

  return (
    <BoxSlider>
      <SliderInfo />
    </BoxSlider>
  )
}
