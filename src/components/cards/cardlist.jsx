import React from 'react'
import Card from '../cards/card';
const cardlist = ({data}) => {
  return (
    <div>
        {data.map((d)=>{
            return <Card key={d.id} charac={d}/>
        })}
    </div>
  )
}

export default cardlist