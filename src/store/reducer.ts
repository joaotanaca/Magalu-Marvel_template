import { ICompleteCharacter } from '../utils/interfaces/characters'
import { ADD_CHARACTERS, REMOVE_CHARACTERS, SEARCH } from './actions'

const initialState: ICompleteCharacter[] = JSON.parse(
  localStorage.getItem('FAVORITE_HERO') ?? '[]'
)

export function favorite(
  state = initialState,
  action: { type: string; character?: ICompleteCharacter | number }
) {
  switch (action.type) {
    case ADD_CHARACTERS: {
      const favorite = [...state, action.character]
      localStorage.setItem('FAVORITE_HERO', JSON.stringify(favorite))
      return favorite
    }
    case REMOVE_CHARACTERS: {
      const favorite = state.filter(hero => hero.id !== action.character)
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
