import './Search.css'
import SearchItem from './SearchItem'
import NavigationBar from '../NavigationBar'

function Search(){
    return (
        <div className="background">
            <div className="titleText">
                넉쇠
            </div>
            <div>
                검색 : SIUU
            </div>
            <br/>
            <br/>
            <div className="users">
            <SearchItem id={ "SIUU" }/>
            <SearchItem id={ "SIUU" }/>
            <SearchItem id={ "SIUU" }/>
            <SearchItem id={ "SIUU" }/>
            </div>
            <NavigationBar/>
        </div>
    )
}

export default Search