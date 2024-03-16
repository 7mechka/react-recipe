import { useEffect, useState } from 'react'
import SearchForm from './SearchForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from '../routes/recipe'
import Root from '../routes/root'
import { AppHeader } from './AppHeader'
import { RecipeCard } from './RecipeCard'

function App() {
  const API_BASEURL = 'https://api.edamam.com/api/recipes/v2'
  const APP_ID = 'f652563c'
  const APP_KEY = 'd5da2e023c131a1d23f74248aa2ff49b'
  // let [isLoading, setIsLoading] = useState(false)
  let [data, setData] = useState([])
  let [query, setQuery] = useState('')
  let [search, setSearch] = useState('')

  // const testUrl = new URL('http://www.edamam.com/ontologies/edamam.owl#recipe_1b6dfeaf0988f96b187c7c9bb69a14fa')
  // console.log(testUrl.hash)

  async function getRecipes() {
    const response = 
      await fetch(`${API_BASEURL}?app_id=${APP_ID}&app_key=${APP_KEY}&type=public&q=${search}`)
    const results = await response.json()
    setData(data = [...results.hits])
  } 
  function updateQuery() {
    setQuery(query = event.target.value)
  }


  function submitHandler() {
    event.preventDefault()
    setSearch(search = query)
    event.target.reset()
  }

  useEffect(() => {
    getRecipes()
  }, [search])
  
  return (
    <>
    <AppHeader/>
    <SearchForm submitHandler={submitHandler} inputHandler={updateQuery}/>
    {data.map((item, index) => (
      <RecipeCard item={item} key={index}/>
    ))}
      
      
    
    </>
  )
}

export default App
