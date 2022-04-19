import { useEffect, useState } from "react"


function Games() {

  const [gameData, setgameData] = useState("loading...")
  const apiKey = "c348e769ad414a7d837ab9698b8abce2"
  const search = "monster-hunter-world"

  const game = fetch('/api'+`?&key=${apiKey}&search=${search}`)
    .then(resp => resp.json())
    .then((data) => {
      console.log(data)
      setgameData(data.results.at(0))
    })
      if(gameData.name != null){
        return(
          <div>
            <h3>{gameData.name}</h3>
            <img src={gameData.short_screenshots.at(1).image} alt={gameData.name} />
          </div>
          
        )

      } else{
        return(
          <h1>{gameData}</h1>
        )
      } 
}

export default Games