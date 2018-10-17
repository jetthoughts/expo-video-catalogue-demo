import apisauce from 'apisauce'

const create = () => {
  const api = apisauce.create({
    baseURL: 'https://lyoutube-api-master.herokuapp.com/api/v1',
    timeout: 20000,
    responseType: 'json',
  })

  const getVideos = () => {
    return api.get('/videos')
  }

  const getVideo = videoId => {
    return api.get(`/videos/${videoId}`)
  }

  return {
    getVideos,
    getVideo,
  }
}

export default create()
