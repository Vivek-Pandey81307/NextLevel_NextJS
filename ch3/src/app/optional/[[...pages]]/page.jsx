import React from 'react'

const Post = ({params}) => {
    console.log(params)
  return (
    <div>Post:- {params.pages}
        </div>
  )
}

export default Post