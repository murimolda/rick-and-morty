import { useEffect } from "react"
import axios from "axios"
import s from "./CharacterPage.module.css"

export const CharacterPage = () => {
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div>
      <h1 className = {`pageTitle`}>CharacterPage</h1>
    </div>
  )
}