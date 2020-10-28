import { ICharacter } from '../utils/interfaces/characters'

export const ADD_CHARACTERS = 'ADD_CHARACTERS'
export const REMOVE_CHARACTERS = 'REMOVE_CHARACTERS'

export const addCharacters = (character: ICharacter) => ({
  character,
  type: ADD_CHARACTERS
})

export const removeCharacters = (characterID: number) => ({
  characterID,
  type: ADD_CHARACTERS
})
