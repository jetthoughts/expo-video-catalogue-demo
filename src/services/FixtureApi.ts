export default {
  getVideos: () => {
    return {
      ok: true,
      data: require('../fixtures/Videos.json'),
    }
  },
}
