import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import PreviewSlide from './PreviewSlide'
import styles from './styles'

const convertViewportWidth = (percentage, viewportWidth) => {
  const value = percentage * viewportWidth / 100
  return Math.round(value)
}

const getCarouselWidthParameters = () => {
  const { width: viewportWidth } = Dimensions.get('window')
  const slideWidth = convertViewportWidth(39.4, viewportWidth)
  const itemHorizontalMargin = convertViewportWidth(2, viewportWidth)

  const sliderWidth = viewportWidth
  const itemWidth = slideWidth + itemHorizontalMargin * 2
  return { sliderWidth, itemWidth }
}

const renderVideoSlide = ({ item }) => {
  return <PreviewSlide preview={item} />
}

const VideoCarousel = ({ videoSlides }) => {
  const { sliderWidth, itemWidth } = getCarouselWidthParameters()
  return (
    <Carousel
      data={videoSlides}
      renderItem={renderVideoSlide}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      slideStyle={{ width: itemWidth }}
      activeSlideAlignment={'start'}
      enableMomentum={true}
      containerCustomStyle={styles.carousel}
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
    />
  )
}

export default VideoCarousel
