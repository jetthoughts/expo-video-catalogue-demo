const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  holder: {
    height: 220,
    width: '100%',
  },
  loader: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoCarousel: {
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    paddingLeft: 7,
  },
  slideHolder: {
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 4,
    overflow: 'hidden',
  },
  slideImage: {
    height: 170,
    width: '100%',
  },
  slideText: {
    fontSize: 14,
    backgroundColor: '#fff',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 6,
    paddingBottom: 6,
    minHeight: 48,
  },
  videoDuration: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    color: 'rgba(255,255,255,0.9)',
    backgroundColor: 'rgba(0,0,0,0.8)',
    fontSize: 14,
    padding: 2,
    borderRadius: 2,
    overflow: 'hidden',
  },
}

export default styles
