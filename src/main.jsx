import React, { /* useRef */ } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Map } from './archi'

import './index.css'

document.querySelector('#root').classList = 'flex flex-col items-center gap-12 relative'
document.querySelector('html').classList = 'scroll-smooth'

export function App () {
  return (<Map />)
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
