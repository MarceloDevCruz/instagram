import { api, requestConfig } from '../utils/config'

// Publica uma foto
const publishPhoto = async (data, token) => {

  const config = requestConfig('POST', data, token, true)

  try {

    const res = await fetch(api + '/photos', config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

// Pegar post do usuário 
const getUserPhotos = async (id, token) => {

  const config = requestConfig('GET', null, token)

  try {

    const res = await fetch(api + '/photos/user/' + id, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

// Deletar post
const deletePhoto = async (id, token) => {

  const config = requestConfig('DELETE', null, token)

  try {

    const res = await fetch(api + '/photos/' + id, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

// Pegar foto pelo id
const getPhotoById = async (id) => {
  const config = requestConfig("GET")

  try {
    const res = await fetch(api + "/photos/" + id, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

// Dar like na foto
const likePhoto = async (id, token) => {

  const config = requestConfig('PUT', null, token)

  try {

    const res = await fetch(api + '/photos/like/' + id, config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}

// Comentário na foto
const commentPhoto = async (data, id, token) => {
  const config = requestConfig("PUT", data, token);

  try {
    const res = await fetch(api + "/photos/comment/" + id, config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
}

// Resgatar todas os posts
const getAllPost = async () => {

  const config = requestConfig('GET')

  try {

    const res = await fetch(api + '/photos', config)
      .then((res) => res.json())
      .catch((err) => err)

    return res
  } catch (error) {
    console.log(error)
  }
}



const photoService = {
  publishPhoto, getUserPhotos, deletePhoto,
  getPhotoById, likePhoto, commentPhoto, getAllPost
}

export default photoService