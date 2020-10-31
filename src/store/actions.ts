import { ICompleteCharacter } from '../utils/interfaces/characters'

export const ADD_CHARACTERS = 'ADD_CHARACTERS'
export const REMOVE_CHARACTERS = 'REMOVE_CHARACTERS'
export const SEARCH = 'SEARCH'

/**
 *
 * @param character: ICompleteCharacter
 */
export const addCharacters = (character: ICompleteCharacter) => ({
  character,
  type: ADD_CHARACTERS
})

/**
 *
 * @param character: number
 */
export const removeCharacters = (character: number) => ({
  character,
  type: REMOVE_CHARACTERS
})

/**
 *
 * @param search: string
 */
export const searchHero = (search: string) => ({
  search,
  type: SEARCH
})
