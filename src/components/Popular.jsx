import { useEffect, useState } from "react"
import styled from "styled-components"

function Popular() {
  
  const [popular, setPopular] = useState([])
  useEffect(() => {
    getPopular()
  },[])
  const apiKey = ""
  const search = "monster-hunter"

  const getPopular = async () =>{
    const api = await fetch('/api'+`?&key=${apiKey}&search=${search}&search_exact`)
    const data = await api.json()
    console.log(data)
    setPopular(data.results)
  }
 
  return (
    <div><StlH3>Popular Games</StlH3>
    <Container>
    {popular.map((game) => {
      return(
        <Card>
          <p key={game.id}>{game.name}</p>
          <img src={game.short_screenshots.at(0).image} alt={game.name} />
        </Card>
      )
    })}
     </Container>
    </div>
  )
}

export default Popular

const StlH3 = styled.h3`
color: #2EA7F2;
`

const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 2rem;
margin:4rem 10vw;
`
const Card = styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 20rem;
  margin-bottom: 0% auto;
  transform: translate(-50%, 0%);
  color: #2EA7F2;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
}
`