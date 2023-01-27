import { Grid } from '@mui/material'
import React from 'react'

export default function RecipeTile({recipe}) {
  return (
<div>
        <a  href={recipe['recipe']['url']} target="_blank">
        <img className="img" src={recipe['recipe']['image']}
        width={200}
        height={200}
        />
        </a>
        
      <p className="link">{recipe['recipe']['label']}</p>
      </div> 

  )
}
