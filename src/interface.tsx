export interface RootState {
  favorite: {
    favorite: number[]
  }
  card: {
    cardList: {
      id: number
      name: string
      date: string
      photo: string
      price: string
      oldprice: string
    }[]
  }
  app: {
    loading: boolean
    signInPopUp: boolean
    signUpPopUp: boolean
  }
  auth: {
    user: {
      auth: boolean
      status: string
      message: string
      data: {
        id: number
        token: string
      }
    }
  }
}
