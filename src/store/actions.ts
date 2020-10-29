export const ADD_CHARACTERS = 'ADD_CHARACTERS'
export const REMOVE_CHARACTERS = 'REMOVE_CHARACTERS'
export const SEARCH = 'SEARCH'

/**
 *
 * @param character: ICharacter
 */
export const addCharacters = (characterID: number) => ({
  characterID,
  type: ADD_CHARACTERS
})

/**
 *
 * @param characterID: number
 */
export const removeCharacters = (characterID: number) => ({
  characterID,
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
