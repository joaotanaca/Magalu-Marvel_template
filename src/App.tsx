import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Global from './styles/global'
import { store } from './store/store'

function App() {
  return (
    <BrowserRouter>
      <Global />
      <Provider store={store}>
        <ThemeProvider
          theme={{
            red: '#FF1510',
            white: '#FDECEC',
            green: '#E7F6E7'
          }}
        >
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App
