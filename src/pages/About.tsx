import React from 'react'
import ReactPlayer from 'react-player'

export const About: React.FC = () => {
  return (
    <div style={{ width: '640px', margin: '30px auto' }}>
      <ReactPlayer controls url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  )
}
