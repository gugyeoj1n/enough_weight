import React from 'react'
import MainPage from './pages/MainPage'
import Login from './pages/Login'

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
        		<Route exact path="/login" element = { <Login /> }/>
      		</Routes>
    	</BrowserRouter>
	)
}

export default App