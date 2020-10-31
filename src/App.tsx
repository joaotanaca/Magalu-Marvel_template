import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Global from './styles/global'
import { store } from './store/store'
import Heros from './pages/Heros'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider
          theme={{
            red: '#FF1510',
            rose: '#FDECEC',
            white: '#FFF',
            green: '#E7F6E7',
            text_primary: '#404040',
            text_secondary: '#8C8C8C',
            text_sub: '#B9B9B9'
          }}
        >
          <Global />
          <Navbar />
          <Switch>
            <Route path="/hero/:id" component={Heros} />
            <Route path="/" exact component={Home} />
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
