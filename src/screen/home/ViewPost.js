import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewPost() {
  const [view, setView] = useState({})
  const id = useParams().id
  console.log('id', id)
  const handleView = async () => {
    const postView = await axios.delete('/viewPost/:' + id)
    setView(postView)
    console.log('postView', postView)
  }

  useEffect(() => {
    handleView()
  }, [])

  //   console.log('view', view)
  return <div>ViewPost</div>
}

export default ViewPost
