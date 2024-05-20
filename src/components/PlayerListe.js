import React from 'react'
import Player from './Player'

function PlayerListe({Players}) {
  return (
    <div class="aa">
      {Players.map((el)=><Player el={el}/>)}
    </div>
  )
}

export default PlayerListe
