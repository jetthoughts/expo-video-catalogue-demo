export default {
  getVideos: () => {
    return {
      ok: true,
      data: require('../fixtures/Videos.json'),
    }
  },
  getVideo: videoId => {
    return {
      ok: true,
      data: require('../fixtures/Video.json')
    }
  },
}
