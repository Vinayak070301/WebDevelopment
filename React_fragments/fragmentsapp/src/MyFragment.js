import React from 'react'

const MyFragment = (prop) => {
    const child=prop.children;
  return (
    child.map(c => {return c})
  )
}

export default MyFragment