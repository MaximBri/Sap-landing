import Image from 'next/image'
import GraphicPng from './icons/graphic.png'

export const Graphic = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image src={GraphicPng} alt='graphic' />
    </div>
  )
}
