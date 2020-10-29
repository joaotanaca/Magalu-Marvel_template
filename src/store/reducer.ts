import { ADD_CHARACTERS, REMOVE_CHARACTERS, SEARCH } from './actions'

const initialState: number[] = JSON.parse(
  localStorage.getItem('FAVORITE_HERO') ?? '[]'
)

export function favorite(
  state = initialState,
  action: { type: string; characterID?: number }
) {
  switch (action.type) {
    case ADD_CHARACTERS: {
      const favorite = [...state, action.characterID]
      localStorage.setItem('FAVORITE_HERO', JSON.stringify(favorite))
      return favorite
    }
    case REMOVE_CHARACTERS: {
      const favorite = state.filter(id => id !== action.characterID)
      localStorage.setItem('FAVORITE_HERO', JSON.stringify(favorite))
      return favorite
    }
    default:
      return state
  }
}

export function search(state = '', action: { type: string; search: string }) {
  switch (action.type) {
    case SEARCH:
      return action.search
    default:
      return state
  }
}
