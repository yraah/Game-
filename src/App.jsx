import React from 'react'
import './App.css'
import Component from './components/index.tsx'
import { store } from './Store.tsx'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Component/>
    </Provider>
  )
}

export default App
