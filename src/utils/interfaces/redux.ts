import { ICompleteCharacter } from './characters'

export interface StateRedux {
  favorite: ICompleteCharacter[]
  search: string
}
