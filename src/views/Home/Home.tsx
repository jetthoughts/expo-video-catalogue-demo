import React, { Component } from 'react'
import { View } from 'react-native'
import VideoCarousel from './VideoCarousel'
import styles from './styles'
import { LinearGradient } from 'expo'
import api from '../../services/api'
import Spinner from '../Spinner'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.getVideos()
  }

  async getVideos() {
    try {
      const response = await api.getVideos()
      this.setState({
        videos: response.data,
        isLoading: true,
      })
    } catch (error) {
      alert('Server Error')
    }
  }

  render() {
    if (!this.state.isLoading) {
      return <Spinner />
    }
    return (
      <LinearGradient colors={['#F2F2F2', '#3061D9']} style={styles.container}>
        <View style={styles.holder}>
          <VideoCarousel videoSlides={this.state.videos} />
        </View>
      </LinearGradient>
    )
  }
}

export default Home
