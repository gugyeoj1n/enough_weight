import React from 'react'
import MainPage from './pages/MainPage'
import Login from './pages/Login'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Register from './pages/Register';

function App() {
	return (
		<BrowserRouter>
      		<Routes>
        		<Route exact path="/" element = { <MainPage /> }/>
        		<Route exact path="/login" element = { <Login /> }/>
				<Route eaxct path="/register" element = { <Register /> }/>
      		</Routes>
    	</BrowserRouter>
	)
}

export default App