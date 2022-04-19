import { useState } from "react"


function Games() {

  const [info, setInfo] = useState()
  const apiKey = "c348e769ad414a7d837ab9698b8abce2"
  const search = "monster-hunter-world"

  const game = fetch('/api'+`?&key=${apiKey}&search=${search}`, {})
    .then(resp => resp.json())
    .then((data) => {
      console.log(data)
      setInfo(data.results.at(0))
    })
    



  return (
    <div>
      {info.name}
      <img src={info.background_image} alt={info.name} />
    </div>
  )
}

export default Games