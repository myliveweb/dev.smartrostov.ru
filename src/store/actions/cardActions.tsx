import { FETCH_CARDS, SAGA_FETCH_CARDS } from '../types'

export function sagaFetchCards(data: {}[]) {
  return {
    type: FETCH_CARDS,
    payload: data,
  }
}

export function fetchCards(offset: number, limit: number) {
  return {
    type: SAGA_FETCH_CARDS,
    offset: offset,
    limit: limit,
  }
}
