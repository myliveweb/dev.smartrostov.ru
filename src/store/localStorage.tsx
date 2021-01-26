import { RootState } from '../interface'

// convert object to string and store in localStorage
export const saveToLocalStorage = (state: RootState) => {
  try {
    const serialisedState = JSON.stringify(state)
    window.localStorage.setItem('persistantState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
export const loadFromLocalStorage = () => {
  try {
    const serialisedState = window.localStorage.getItem('persistantState')
    if (serialisedState === null) return undefined
    const json = JSON.parse(serialisedState)
    return {
      ...json,
      app: { loading: false, signInPopUp: false, signUpPopUp: false },
    }
  } catch (e) {
    console.warn(e)
    return undefined
  }
}
