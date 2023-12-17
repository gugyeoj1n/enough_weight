import React from 'react'

import MainPage from './pages/MainPage/MainPage'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import ArticlePost from './pages/Article/ArticlePost'
import Search from './pages/Search/Search'

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
				<Route eaxct path="/register" element = { <Register /> }/>
				<Route exact path="/profile" element = { <Profile /> }/>
				<Route exact path="/post_article" element= { <ArticlePost /> }/>
				<Route exact path="/search" element= { <Search /> }/>
      		</Routes>
    	</BrowserRouter>
	)
}

export default App