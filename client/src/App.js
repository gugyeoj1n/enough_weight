import React from 'react'
import MainPage from './pages/MainPage'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
      		<Routes>
        		<Route exact path="/" element = { <MainPage /> }/>
      		</Routes>
    	</BrowserRouter>
	)
}

export default App