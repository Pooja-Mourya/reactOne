import axios from 'axios'

const postsUrl = 'http://localhost:8080'

export const addPost = async (post) => {
  return await axios.post(`${postsUrl}/createPost`, post)
}
export const deletePost = async (post) => {
  await axios.delete(`${postsUrl}/deletePost`, post)
}
export const newUser = async (post) => {
  return await axios.post(`${postsUrl}/userRegistration`, post)
}
export const newLogin = async (post) => {
  await axios.post(`${postsUrl}/userLogin${post}`)
}

export const postMethod = async (endPoint, body, token) => {
  let url = postsUrl + endPoint
  console.log('endPoint', endPoint)
  let headers = {
    Accept: '*/*',
    Content: 'application/json',
    //   'content-type': 'multipart/form-data',
  }

  if (token) headers['Authorization'] = 'Bearer ' + token

  let config = {
    headers: headers,
  }

  // console.log('config--', config);
  console.log('url***', url)
  // console.log('body--', body);

  try {
    let response = await axios.post(url, body, config)
    console.log('response', response)
    return response
  } catch (error) {
    console.log('error', error)
  }
}
