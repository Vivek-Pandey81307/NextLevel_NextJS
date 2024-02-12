import React from 'react'

const Posts = ({params}) => {
  console.log(params)
  return (
    <div>Posts Items - {params.posts} </div>
  )
}

export default Posts