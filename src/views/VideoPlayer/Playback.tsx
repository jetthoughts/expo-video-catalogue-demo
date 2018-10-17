import React, { Component } from 'react'
import { Video } from 'expo'
import VideoPlayer from '@expo/videoplayer'
import { Actions } from 'react-native-router-flux'
import api from '../../services/FixtureApi'
import Spinner from '../Spinner'

interface Props {
  id: string
}

class Playback extends Component<Props, {}> {
  constructor() {
    super()
    this.state = {
      videoName: '',
      uri: '',
      nextVideoId: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    this.getVideo(this.props.id)
  }

  isFinish = playbackStatus => {
    const { durationMillis, positionMillis } = playbackStatus
    if (durationMillis === positionMillis && positionMillis > 0) {
      this.setState({
        isLoading: false,
      })
      this.getVideo(this.state.nextVideoId)
    }
  }

  async getVideo(videoId) {
    const response = await api.getVideo(videoId)
    if (response.ok) {
      this.setState({
        videoName: response.data.name,
        uri: response.data.uri,
        nextVideoId: response.data.nextVideoId,
        isLoading: true,
      })
    } else {
      alert(response.data.error)
      Actions.pop()
    }
  }

  render() {
    if (!this.state.isLoading) {
      return <Spinner />
    }
    return (
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: this.state.uri,
          },
        }}
        switchToPortrait={() => Actions.pop()}
        title={this.state.videoName}
        backButtonCallback={() => Actions.pop()}
        playbackCallback={this.isFinish}
      />
    )
  }
}

export default Playback
