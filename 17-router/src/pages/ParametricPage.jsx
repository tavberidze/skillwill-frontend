import React from 'react'
import data from '../data'
import { useParams } from 'react-router-dom'

const ParametricPage = () => {
  const param = useParams()
  
  const fact = data.find(fact => fact.factId == param.factId)
  if(!fact) return ( <h1>ფაქტი ვერ მოიძებნა</h1>)

  return (
    <div>
        <h1>{fact.factId}. {fact.factTitle}</h1>
        <p>{fact.factDesc}</p>
    </div>
  )
}

export default ParametricPage