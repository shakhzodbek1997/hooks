import React from 'react'

export default function Main({ toggle }) {
  return (
    <>
      <p>Hello From Context</p>
      <button className='success' onClick={toggle}>Show Alert </button>
    </>
  )
}
