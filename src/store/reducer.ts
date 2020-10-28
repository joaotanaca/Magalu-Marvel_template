import { ICharacter } from '../utils/interfaces/characters'
import { ADD_CHARACTERS, REMOVE_CHARACTERS } from './actions'

const initialState: ICharacter[] = []

export function favoriteReducer(
  state = initialState,
  action: { type: string; characterID?: number; character?: ICharacter }
) {
  switch (action.type) {
    case ADD_CHARACTERS:
    case REMOVE_CHARACTERS:
    default:
      localStorage.setItem('FAVORITES', 'AAA')
      return state
  }
}
