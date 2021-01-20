import React from 'react'

const dataItems = [
  { id: 1, shop: 'vliga', name: 'Мороженое Минское Пломбир шоколадный ж15% 400г Россия', date: 'с 8 по 20 января', photo: '/asset/img/1.webp', price: '159,90 ₽', oldPrice: '209,90 ₽' },
  { id: 2, shop: 'mfamily', name: 'Мороженное Магнат миндаль, 0,073кг', date: 'с 20 по 26 января', photo: '/asset/img/2.webp', price: '44,90 ₽', oldPrice: '89,80 ₽' },
  { id: 3, shop: 'nkvartal', name: 'Мороженое двухслойное Золотая ириска в карамельной глазури эскимо (сырок) 15% 80 гр', date: 'с 18 по 31 января', photo: '/asset/img/3.webp', price: '36,90 ₽', oldPrice: '64,90 ₽' },
  { id: 4, shop: 'dixi', name: 'Мороженое КОРНЕТТО ЮНИКОРН рожок, 73 г', date: 'с 14 по 31 января', photo: '/asset/img/4.webp', price: '49,99 ₽', oldPrice: '79,99 ₽' },
]

interface CardProps {
  match: {params: {
    id: string
  }}
}

const Card: React.FC<CardProps> = (props) => {

  const id = parseInt(props.match.params.id, 10)

  const [itemCard] = dataItems.filter(card => {
    return card.id === id;
  })

  return (
    <div>
      Card {id}
    </div>
  )
}

export default Card;