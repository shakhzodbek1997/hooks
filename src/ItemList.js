import React, { useEffect, useState } from 'react'

export default function ItemList({getItems}) {
  const [ items, setItems ] = useState([]);
  useEffect(() => {
    const newItem = getItems(8);
    setItems(newItem);
    console.log('render....')
  }, [getItems]);


  return (
    <ul>
      {items.map((i => <li key={i}>{i}</li>))}
    </ul>
  )
}
