import React from 'react'
import './App.css'
import Component from './components'
import { store } from './Store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Component/>
    </Provider>
  )
}

export default App
