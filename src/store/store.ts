import { createStore } from 'redux'

import { favoriteReducer } from './reducer'

export const store = createStore(favoriteReducer)
